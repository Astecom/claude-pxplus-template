# Google Workspace Objects

**Google API App Setup**|   
---|---  
  
## Client ID and Client Secret

To set up a Google Workspace object, the constructor requires a Client ID and Client Secret, which are obtained only from Google via the Google API Console.

Follow the steps below to obtain a Client ID and Client Secret. After that, the next process involves allowing access to the needed Google APIs. See **[Allow Access to Google APIs](App%20Setup.htm#allow_access)**.

#### **Important Note:**  
These steps may be subject to change, depending on any recent changes or updates by Google.

**Step** |  **Description**  
---|---  
1. |  Go to the **[Google API Console](https://console.developers.google.com/apis)**.  
2. |  Click **Create Project**. This button is available if no projects have been created. If a project was created previously, it will load by default. To select a particular project when more than one exists, invoke the **Select a Project** window by clicking the drop-down arrow at the top next to the title "Google Cloud Platform". The **Select a Project** window also provides a **New Project** button for creating a new project.  
3. |  Name your project and optionally select an organization. (To select one, Google account must be part of an organization.) Click **Create**.  
4. |  Go to **≡ > APIs & Services > OAuth consent screen**.  
5. |  Select **External** and click **Create**. (**_OR_** Select **Internal** to limit use to Google accounts in your organization.)  
6. |  Set the Application name, Application logo, and Support e-mail that will display on your application consent screen.  
7. |  Set Application links.  
8. |  Input **pvxplus.com** for **Authorized domains**. Press Enter.  
9. |  Input your application Web site domain for **Authorized domains**. Press Enter.  
10. |  Click **Save and Continue**.  
11. |  Click **Credentials > Create credentials > OAuth client ID**.  
12. |  For Application type, select **Web application**.  
13. |  Name your OAuth 2.0 client. Click **Add URIs** under **Authorized redirect URIs** and input **https://www.pvxplus.com/oauth.pvp**.  
14. |  Click **Create** and then save the Client ID and Client Secret.  
  
##  Allow Access to Google APIs

Once you have a Client ID and Client Secret, follow the steps below when you want to access the Google Workspace objects.

**Step** |  **Description**  
---|---  
1. |  Go to the **[Google API Console](https://console.developers.google.com/apis)**.  
2. |  Click **Enable APIs and Services**.  
3. |  Search for "Google Drive API". Then select it and click **Enable**. (Google Drive API is **_required_** by all Google Workspace objects.) To use the **Google Docs** object, click **≡ > APIs & Services > Library**. Search for "Google Docs API". Then select it and click **Enable**. To use the **Google Sheets** object, click **≡ > APIs & Services > Library**. Search for "Google Sheets API". Then select it and click **Enable**.  
4. |  Go to **≡ > APIs & Services > OAuth consent screen**.  
5. |  Click **Edit App**.  
6. |  Click **Save and Continue**.  
7. |  Click **Add or Remove Scopes** and select **Google Drive API ../auth/drive.** (Google Drive API is **_required_** by all Google Workspace objects.) To use the **Google Docs** object, select **Google Docs API ../auth/documents.** To use the **Google Sheets** object, select **Google Sheets API ../auth/spreadsheets.** Click **Update**.  
8. |  Click **Save and Continue** and then click **Go to Dashboard**.  
  
##  Add Test User

To test the Google Workspace objects, you need to add, as a "Test User", the Google account that you will use to test the objects and whose Drive, Docs and/or Sheets you will access. To do this, follow the steps below.

**Step** |  **Description**  
---|---  
1. |  Go to the **[Google API Console](https://console.developers.google.com/apis)**.  
2. |  Go to **≡ > APIs & Services > OAuth consent screen**.  
3. |  Under **Test Users** , click **+Add User**. Enter _Test Google Accounts_ and click **Save**.  
  
While testing, when the PxPlus Google Workspace object is created and the login window is opened, a message warns you that this app has not been verified and is still being tested. You are advised to continue only if you know and trust the developer who invited you. This warning will go away once you publish the app after testing.

##  Publish and Verify the App

Once testing is done, you can publish the app, which makes it available for others (besides Test Users) and removes the unverified warning. Publication requires Google to verify the app, and Google informs you about what this process requires when you publish the app.

**Step** |  **Description**  
---|---  
1. |  Go to the **[Google API Console](https://console.developers.google.com/apis)**.  
2. |  Go to **≡ > APIs & Services > OAuth consent screen**.  
3. |  Under **Testing** , click **Publish App**.  
  
Google Workspace is a registered trademark of Google LLC
