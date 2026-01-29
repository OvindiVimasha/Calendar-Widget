const { app, BrowserWindow } = require("electron");

// Create the main application window
function createWindow() {
  const win = new BrowserWindow({
    width: 214,
    height: 228,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false, 
    transparent: true,
    webPreferences: {
      contextIsolation: true
    }
  });
  // Load the index.html of the app
  win.loadFile("index.html");
}
// This method will be called when Electron has finished initialization
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});