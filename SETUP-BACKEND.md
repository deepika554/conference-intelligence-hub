# Setting Up Shared Backend (Google Sheets)

This lets tasks, notes, and budget sync across your whole team's dashboards.

## Steps

### 1. Open the Google Sheet
Go to: https://docs.google.com/spreadsheets/d/1sfPRCLX9QSCFAvBHFMT6uzvyDIAEHGj6ywqUzChFlek/edit

### 2. Open Apps Script
Click **Extensions** → **Apps Script**

### 3. Paste the code
- Delete anything already in `Code.gs`
- Copy the entire contents of `apps-script-backend.gs` and paste it in
- Save (Ctrl+S)

### 4. Deploy as Web App
1. Click **Deploy** → **New deployment**
2. Click the gear icon next to "Select type" → choose **Web app**
3. Set:
   - **Description**: `CIH Shared Backend`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone` (the code validates @risalabs.ai/@risa.inc/@risacare.com emails internally)
4. Click **Deploy**
5. **Authorize** when prompted (review permissions, click Allow)
6. Copy the **Web app URL**

### 5. Add to Dashboard
1. Open the dashboard → click ⚙️ Settings
2. Paste the URL in the **"Shared Backend (Google Sheets)"** field
3. Click **Save**

### 6. Done!
The dashboard will now sync tasks, notes, and budget to the Sheet. Other team members paste the same URL in their settings.

## How it works
- **Tasks, notes, budget** → stored in the Google Sheet (shared across everyone)
- **Filter prefs, collapse states, UI settings** → stay in localStorage (per-person)
- If the Sheet is unreachable, the dashboard falls back to local data silently
- Look for the ☁️/💾 indicator in the bottom-right corner

## Security
- Only @risalabs.ai, @risa.inc, @risacare.com emails are accepted
- The Sheet is owned by your Google account
- To restrict further: Deploy → Manage deployments → change access to "Only users in my organization"
