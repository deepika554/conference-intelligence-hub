/**
 * Conference Intelligence Hub — Shared Backend
 * Paste this into: Google Sheet → Extensions → Apps Script
 * Sheet ID: 1sfPRCLX9QSCFAvBHFMT6uzvyDIAEHGj6ywqUzChFlek
 */

const SHEET_ID = SpreadsheetApp.getActiveSpreadsheet().getId();

function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  try {
    const params = e.parameter || {};
    let body = {};
    try { body = JSON.parse(e.postData?.contents || '{}'); } catch(x) {}
    
    const action = params.action || body.action || '';
    const email = params.email || body.email || '';
    
    // Validate risalabs.ai domain
    if (!email.endsWith('@risalabs.ai') && !email.endsWith('@risa.inc') && !email.endsWith('@risacare.com')) {
      return jsonResponse({ error: 'Unauthorized domain' });
    }
    
    ensureSheets();
    
    switch(action) {
      case 'getAll':     return jsonResponse({ data: getAllData() });
      case 'getTasks':   return jsonResponse({ data: getRows('Tasks', params.confId) });
      case 'getNotes':   return jsonResponse({ data: getRows('Notes', params.confId) });
      case 'getTeam':    return jsonResponse({ data: getRows('Team') });
      case 'getBudget':  return jsonResponse({ data: getRows('Budget', params.confId) });
      case 'addTask':    return jsonResponse({ data: addRow('Tasks', body, email) });
      case 'updateTask': return jsonResponse({ data: updateRow('Tasks', body) });
      case 'deleteTask': return jsonResponse({ data: deleteRow('Tasks', body.id) });
      case 'addNote':    return jsonResponse({ data: addRow('Notes', body, email) });
      case 'deleteNote': return jsonResponse({ data: deleteRow('Notes', body.id) });
      case 'addTeam':    return jsonResponse({ data: addRow('Team', body, email) });
      case 'removeTeam': return jsonResponse({ data: deleteRow('Team', body.id) });
      case 'addBudget':  return jsonResponse({ data: addRow('Budget', body, email) });
      case 'deleteBudget': return jsonResponse({ data: deleteRow('Budget', body.id) });
      default:           return jsonResponse({ status: 'ok', message: 'CIH Backend running.' });
    }
  } catch(err) {
    return jsonResponse({ error: err.message });
  }
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// ---- Sheet Setup ----

const SCHEMAS = {
  Tasks:  ['id','confId','title','assignee','priority','dueDate','category','status','completedAt','createdBy','createdAt','updatedAt'],
  Notes:  ['id','confId','note','createdBy','createdAt'],
  Team:   ['id','name','email','role','color','addedBy','addedAt'],
  Budget: ['id','confId','type','description','amount','createdBy','createdAt']
};

function ensureSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  for (const [name, cols] of Object.entries(SCHEMAS)) {
    let sheet = ss.getSheetByName(name);
    if (!sheet) {
      sheet = ss.insertSheet(name);
      sheet.getRange(1, 1, 1, cols.length).setValues([cols]);
      sheet.getRange(1, 1, 1, cols.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }
  }
}

// ---- CRUD ----

function getAllData() {
  return {
    tasks: getRows('Tasks'),
    notes: getRows('Notes'),
    team: getRows('Team'),
    budget: getRows('Budget')
  };
}

function getRows(sheetName, confId) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet || sheet.getLastRow() < 2) return [];
  
  const headers = SCHEMAS[sheetName];
  const data = sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length).getValues();
  
  let rows = data.map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = row[i] || '');
    return obj;
  }).filter(r => r.id); // skip empty rows
  
  if (confId) rows = rows.filter(r => r.confId === confId);
  return rows;
}

function addRow(sheetName, body, email) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(sheetName);
  const headers = SCHEMAS[sheetName];
  const now = new Date().toISOString();
  
  // Generate ID
  const id = body.id || Utilities.getUuid().slice(0, 8);
  
  const row = headers.map(h => {
    if (h === 'id') return id;
    if (h === 'createdBy' || h === 'addedBy') return email;
    if (h === 'createdAt' || h === 'addedAt') return now;
    if (h === 'updatedAt') return now;
    return body[h] || '';
  });
  
  sheet.appendRow(row);
  
  const obj = {};
  headers.forEach((h, i) => obj[h] = row[i]);
  return obj;
}

function updateRow(sheetName, body) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(sheetName);
  const headers = SCHEMAS[sheetName];
  if (!body.id || sheet.getLastRow() < 2) return { error: 'Not found' };
  
  const data = sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length).getValues();
  const idIdx = headers.indexOf('id');
  
  for (let i = 0; i < data.length; i++) {
    if (String(data[i][idIdx]) === String(body.id)) {
      headers.forEach((h, j) => {
        if (h !== 'id' && h !== 'createdBy' && h !== 'createdAt' && body[h] !== undefined) {
          data[i][j] = body[h];
        }
        if (h === 'updatedAt') data[i][j] = new Date().toISOString();
      });
      sheet.getRange(i + 2, 1, 1, headers.length).setValues([data[i]]);
      
      const obj = {};
      headers.forEach((h, j) => obj[h] = data[i][j]);
      return obj;
    }
  }
  return { error: 'Not found' };
}

function deleteRow(sheetName, id) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(sheetName);
  const headers = SCHEMAS[sheetName];
  if (!id || sheet.getLastRow() < 2) return { error: 'Not found' };
  
  const data = sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length).getValues();
  const idIdx = headers.indexOf('id');
  
  for (let i = 0; i < data.length; i++) {
    if (String(data[i][idIdx]) === String(id)) {
      sheet.deleteRow(i + 2);
      return { deleted: id };
    }
  }
  return { error: 'Not found' };
}
