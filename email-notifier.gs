function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    var to = data.to;
    var assignee = data.assignee || "Team Member";
    var task = data.task || "New Task";
    var conference = data.conference || "";
    var priority = data.priority || "medium";
    var dueDate = data.dueDate || "No due date";
    var assignedBy = data.assignedBy || "RISA GTM Hub";
    
    var priorityLabel = priority.charAt(0).toUpperCase() + priority.slice(1);
    var subject = "New Task: " + task + (conference ? " - " + conference : "");
    
    var body = "Hi " + assignee + ",\n\n" +
      "You have been assigned a new task in the Conference Intelligence Hub.\n\n" +
      "Task: " + task + "\n" +
      (conference ? "Conference: " + conference + "\n" : "") +
      "Priority: " + priorityLabel + "\n" +
      "Due: " + dueDate + "\n" +
      "Assigned by: " + assignedBy + "\n\n" +
      "Open Dashboard: https://deepika554.github.io/conference-intelligence-hub/\n\n" +
      "- RISA Labs GTM Hub";
    
    var htmlBody = '<div style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;max-width:600px;margin:0 auto;">' +
      '<div style="background:#3b6cf5;color:white;padding:20px 24px;border-radius:12px 12px 0 0;">' +
      '<h2 style="margin:0;font-size:18px;">New Task Assigned</h2>' +
      '</div>' +
      '<div style="background:#ffffff;border:1px solid #e8ecf2;border-top:none;padding:24px;border-radius:0 0 12px 12px;">' +
      '<p style="margin:0 0 16px;color:#1a2233;">Hi <strong>' + assignee + '</strong>,</p>' +
      '<p style="margin:0 0 20px;color:#6b7b94;">You have been assigned a task in the Conference Intelligence Hub.</p>' +
      '<div style="background:#f7f9fc;border-radius:10px;padding:20px;margin-bottom:20px;">' +
      '<div style="font-size:16px;font-weight:600;color:#1a2233;margin-bottom:12px;">' + task + '</div>' +
      '<table style="width:100%;font-size:14px;color:#6b7b94;">' +
      (conference ? '<tr><td style="padding:4px 0;">Conference</td><td style="padding:4px 0;font-weight:500;color:#1a2233;">' + conference + '</td></tr>' : '') +
      '<tr><td style="padding:4px 0;">Priority</td><td style="padding:4px 0;font-weight:500;color:#1a2233;">' + priorityLabel + '</td></tr>' +
      '<tr><td style="padding:4px 0;">Due Date</td><td style="padding:4px 0;font-weight:500;color:#1a2233;">' + dueDate + '</td></tr>' +
      '<tr><td style="padding:4px 0;">Assigned by</td><td style="padding:4px 0;font-weight:500;color:#1a2233;">' + assignedBy + '</td></tr>' +
      '</table>' +
      '</div>' +
      '<a href="https://deepika554.github.io/conference-intelligence-hub/" style="display:inline-block;background:#3b6cf5;color:white;padding:10px 24px;border-radius:8px;text-decoration:none;font-weight:500;font-size:14px;">Open Dashboard</a>' +
      '</div>' +
      '</div>';
    
    GmailApp.sendEmail(to, subject, body, {
      htmlBody: htmlBody,
      name: "RISA GTM Hub"
    });
    
    return ContentService.createTextOutput(JSON.stringify({success: true})).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({status: "ok", message: "Conference Intelligence Hub Email Notifier is running."})).setMimeType(ContentService.MimeType.JSON);
}
