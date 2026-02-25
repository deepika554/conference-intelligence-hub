/**
 * Conference Intelligence Hub — Google Sheets Backend
 * 
 * Deploy as Web App:
 *   Execute as: Me
 *   Access: Anyone with Google account (or restrict to your org)
 */

const SHEET_ID = '1sfPRCLX9QSCFAvBHFMT6uzvyDIAEHGj6ywqUzChFlek';
const ALLOWED_DOMAIN = 'risalabs.ai';

function getOrCreateSheet(name, headers) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  }
  return sheet;
}

const SCHEMAS = {
  Tasks: ['id','confId','title','assignee','priority','dueDate','category','status','completedAt','createdBy','createdAt','updatedAt'],
  Notes: ['id','confId','note','createdBy','createdAt'],
  Team:  ['name','email','role','color'],
  Budget: ['confId','type','description','amount','createdBy','createdAt']
};

function initSheets() {
  Object.entries(SCHEMAS).forEach(([name, headers]) => getOrCreateSheet(name, headers));
}

function validateEmail(email) {
  if (!email) return false;
  return email.endsWith('@' + ALLOWED_DOMAIN);
}

function getCallerEmail(e) {
  // Try session first, fall back to param
  try {
    const user = Session.getActiveUser().getEmail();
    if (user) return user;
  } catch(_) {}
  return (e && e.parameter && e.parameter.email) || '';
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

function sheetToArray(sheet) {
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];
  const headers = data[0];
  return data.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = row[i]);
    return obj;
  });
}

function filterByConfId(arr, confId) {
  if (!confId) return arr;
  return arr.filter(r => r.confId === confId);
}

// ========== GET ==========
function doGet(e) {
  const email = getCallerEmail(e);
  if (!validateEmail(email)) return jsonResponse({error: 'Unauthorized', message: 'Requires @' + ALLOWED_DOMAIN + ' email'});
  
  const action = (e.parameter && e.parameter.action) || '';
  const confId = e.parameter && e.parameter.confId;
  
  try {
    switch(action) {
      case 'getTasks':
        return jsonResponse({success: true, data: filterByConfId(sheetToArray(getOrCreateSheet('Tasks', SCHEMAS.Tasks)), confId)});
      case 'getNotes':
        return jsonResponse({success: true, data: filterByConfId(sheetToArray(getOrCreateSheet('Notes', SCHEMAS.Notes)), confId)});
      case 'getTeam':
        return jsonResponse({success: true, data: sheetToArray(getOrCreateSheet('Team', SCHEMAS.Team))});
      case 'getBudget':
        return jsonResponse({success: true, data: filterByConfId(sheetToArray(getOrCreateSheet('Budget', SCHEMAS.Budget)), confId)});
      case 'getAll':
        return jsonResponse({success: true, data: {
          tasks: filterByConfId(sheetToArray(getOrCreateSheet('Tasks', SCHEMAS.Tasks)), confId),
          notes: filterByConfId(sheetToArray(getOrCreateSheet('Notes', SCHEMAS.Notes)), confId),
          team: sheetToArray(getOrCreateSheet('Team', SCHEMAS.Team)),
          budget: filterByConfId(sheetToArray(getOrCreateSheet('Budget', SCHEMAS.Budget)), confId)
        }});
      default:
        return jsonResponse({error: 'Unknown action: ' + action});
    }
  } catch(err) {
    return jsonResponse({error: err.message});
  }
}

// ========== POST ==========
function doPost(e) {
  const email = getCallerEmail(e);
  if (!validateEmail(email)) return jsonResponse({error: 'Unauthorized', message: 'Requires @' + ALLOWED_DOMAIN + ' email'});
  
  let body = {};
  try { body = JSON.parse(e.postData.contents); } catch(_) {}
  const action = body.action || '';
  
  try {
    switch(action) {
      case 'addTask': return addTask(body, email);
      case 'updateTask': return updateTask(body);
      case 'deleteTask': return deleteRow('Tasks', 'id', body.id);
      case 'addNote': return addNote(body, email);
      case 'deleteNote': return deleteRow('Notes', 'id', body.id);
      case 'addTeam': return addTeamMember(body);
      case 'removeTeam': return deleteRow('Team', 'email', body.email);
      case 'addBudget': return addBudgetItem(body, email);
      case 'deleteBudget': return deleteBudgetRow(body);
      default: return jsonResponse({error: 'Unknown action: ' + action});
    }
  } catch(err) {
    return jsonResponse({error: err.message});
  }
}

function addTask(body, email) {
  const sheet = getOrCreateSheet('Tasks', SCHEMAS.Tasks);
  const now = new Date().toISOString();
  const id = body.id || Utilities.getUuid();
  const row = [
    id, body.confId||'', body.title||'', body.assignee||'',
    body.priority||'medium', body.dueDate||'', body.category||'general',
    body.status||'todo', '', email, now, now
  ];
  sheet.appendRow(row);
  return jsonResponse({success: true, id: id});
}

function updateTask(body) {
  const sheet = getOrCreateSheet('Tasks', SCHEMAS.Tasks);
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const idCol = headers.indexOf('id');
  for (let i = 1; i < data.length; i++) {
    if (data[i][idCol] == body.id) {
      // Update provided fields
      Object.keys(body).forEach(key => {
        if (key === 'action' || key === 'id') return;
        const col = headers.indexOf(key);
        if (col >= 0) sheet.getRange(i + 1, col + 1).setValue(body[key]);
      });
      sheet.getRange(i + 1, headers.indexOf('updatedAt') + 1).setValue(new Date().toISOString());
      return jsonResponse({success: true});
    }
  }
  return jsonResponse({error: 'Task not found'});
}

function deleteRow(sheetName, keyField, keyValue) {
  const sheet = getOrCreateSheet(sheetName, SCHEMAS[sheetName]);
  const data = sheet.getDataRange().getValues();
  const col = data[0].indexOf(keyField);
  for (let i = data.length - 1; i >= 1; i--) {
    if (data[i][col] == keyValue) {
      sheet.deleteRow(i + 1);
      return jsonResponse({success: true});
    }
  }
  return jsonResponse({error: 'Not found'});
}

function addNote(body, email) {
  const sheet = getOrCreateSheet('Notes', SCHEMAS.Notes);
  const id = body.id || Utilities.getUuid();
  sheet.appendRow([id, body.confId||'', body.note||'', email, new Date().toISOString()]);
  return jsonResponse({success: true, id: id});
}

function addTeamMember(body) {
  const sheet = getOrCreateSheet('Team', SCHEMAS.Team);
  // Check if already exists
  const data = sheetToArray(sheet);
  if (data.find(r => r.email === body.email)) return jsonResponse({error: 'Team member already exists'});
  sheet.appendRow([body.name||'', body.email||'', body.role||'', body.color||'']);
  return jsonResponse({success: true});
}

function addBudgetItem(body, email) {
  const sheet = getOrCreateSheet('Budget', SCHEMAS.Budget);
  sheet.appendRow([body.confId||'', body.type||'misc', body.description||'', body.amount||0, email, new Date().toISOString()]);
  return jsonResponse({success: true});
}

function deleteBudgetRow(body) {
  const sheet = getOrCreateSheet('Budget', SCHEMAS.Budget);
  const data = sheet.getDataRange().getValues();
  // Match by confId + type + description
  for (let i = data.length - 1; i >= 1; i--) {
    if (data[i][0] == body.confId && data[i][1] == body.type && data[i][2] == body.description) {
      sheet.deleteRow(i + 1);
      return jsonResponse({success: true});
    }
  }
  return jsonResponse({error: 'Not found'});
}
