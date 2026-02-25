/**
 * Conference Intelligence Hub — Shared Backend + Gmail Threads
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
      // Data CRUD
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
      
      // Gmail threads
      case 'getThreads':       return jsonResponse({ data: searchThreads(params.q || body.q || '', parseInt(params.max) || 10) });
      case 'getThread':        return jsonResponse({ data: getThreadDetail(params.threadId || body.threadId) });
      case 'getAllConfThreads': return jsonResponse({ data: getAllConferenceThreads() });
      
      default: return jsonResponse({ status: 'ok', message: 'CIH Backend running.' });
    }
  } catch(err) {
    return jsonResponse({ error: err.message });
  }
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// ============ SHEET SETUP ============

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

// ============ DATA CRUD ============

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
  }).filter(r => r.id);
  
  if (confId) rows = rows.filter(r => r.confId === confId);
  return rows;
}

function addRow(sheetName, body, email) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(sheetName);
  const headers = SCHEMAS[sheetName];
  const now = new Date().toISOString();
  
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

// ============ GMAIL THREAD SEARCH ============

/**
 * Search Gmail threads by query string
 * @param {string} query - Gmail search query
 * @param {number} maxResults - max threads to return
 * @returns {Array} thread summaries
 */
function searchThreads(query, maxResults) {
  if (!query) return [];
  maxResults = Math.min(maxResults || 10, 25);
  
  const threads = GmailApp.search(query, 0, maxResults);
  return threads.map(summarizeThread);
}

/**
 * Get full thread detail including all messages
 */
function getThreadDetail(threadId) {
  if (!threadId) return { error: 'No threadId provided' };
  
  const thread = GmailApp.getThreadById(threadId);
  if (!thread) return { error: 'Thread not found' };
  
  const messages = thread.getMessages();
  return {
    id: thread.getId(),
    subject: thread.getFirstMessageSubject(),
    messageCount: messages.length,
    lastDate: thread.getLastMessageDate().toISOString(),
    isUnread: thread.isUnread(),
    labels: thread.getLabels().map(l => l.getName()),
    messages: messages.map(m => ({
      id: m.getId(),
      from: m.getFrom(),
      to: m.getTo(),
      cc: m.getCc(),
      date: m.getDate().toISOString(),
      subject: m.getSubject(),
      snippet: m.getPlainBody().substring(0, 500),
      isUnread: m.isUnread()
    }))
  };
}

/**
 * Summarize a thread into a compact object
 */
function summarizeThread(thread) {
  const msgs = thread.getMessages();
  const lastMsg = msgs[msgs.length - 1];
  const firstMsg = msgs[0];
  
  // Extract all unique participants
  const participants = new Set();
  msgs.forEach(m => {
    extractEmails(m.getFrom()).forEach(e => participants.add(e));
    extractEmails(m.getTo()).forEach(e => participants.add(e));
  });
  
  // Determine if we sent the last message or they did
  const lastFrom = lastMsg.getFrom().toLowerCase();
  const wesentLast = lastFrom.includes('risalabs.ai') || lastFrom.includes('risa.inc') || lastFrom.includes('risacare.com');
  
  return {
    id: thread.getId(),
    subject: thread.getFirstMessageSubject(),
    snippet: lastMsg.getPlainBody().substring(0, 200).replace(/\n/g, ' ').trim(),
    messageCount: msgs.length,
    firstDate: firstMsg.getDate().toISOString(),
    lastDate: thread.getLastMessageDate().toISOString(),
    isUnread: thread.isUnread(),
    lastFrom: lastMsg.getFrom(),
    weSentLast: wesentLast,
    participants: [...participants].filter(e => !e.includes('risalabs.ai') && !e.includes('risa.inc') && !e.includes('risacare.com')),
    ourParticipants: [...participants].filter(e => e.includes('risalabs.ai') || e.includes('risa.inc') || e.includes('risacare.com')),
    labels: thread.getLabels().map(l => l.getName())
  };
}

/**
 * Extract email addresses from a header string
 */
function extractEmails(headerStr) {
  if (!headerStr) return [];
  const matches = headerStr.match(/[\w.-]+@[\w.-]+\.\w+/g);
  return matches ? matches.map(e => e.toLowerCase()) : [];
}

/**
 * Search Gmail for threads related to all conferences
 * Uses conference name + sponsorship/booth/exhibit keywords
 * Returns { confId: [threads] }
 */
function getAllConferenceThreads() {
  // Conference search terms — map common conference names to search queries
  // This uses a sheet tab "ConferenceSearch" if it exists, otherwise uses defaults
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let searchTerms = {};
  
  const searchSheet = ss.getSheetByName('ConferenceSearch');
  if (searchSheet && searchSheet.getLastRow() > 1) {
    const data = searchSheet.getRange(2, 1, searchSheet.getLastRow() - 1, 2).getValues();
    data.forEach(row => {
      if (row[0] && row[1]) searchTerms[row[0]] = row[1];
    });
  }
  
  // If no custom search terms, search broadly
  if (Object.keys(searchTerms).length === 0) {
    // Search for common sponsorship-related terms across all conferences
    const queries = [
      'subject:(sponsorship OR sponsor OR booth OR exhibit OR prospectus) newer_than:90d',
      'subject:(conference OR summit OR forum) (sponsorship OR booth OR registration) newer_than:90d'
    ];
    
    let allThreads = [];
    queries.forEach(q => {
      const threads = GmailApp.search(q, 0, 50);
      threads.forEach(t => {
        if (!allThreads.find(at => at.id === t.getId())) {
          allThreads.push(summarizeThread(t));
        }
      });
    });
    
    return { _all: allThreads };
  }
  
  // Search per conference
  const results = {};
  for (const [confId, query] of Object.entries(searchTerms)) {
    try {
      const threads = GmailApp.search(query, 0, 15);
      if (threads.length > 0) {
        results[confId] = threads.map(summarizeThread);
      }
    } catch(e) {
      results[confId] = { error: e.message };
    }
  }
  
  return results;
}
