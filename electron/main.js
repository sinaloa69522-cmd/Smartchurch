// SmartChurch desktop shell: loads the same web app from disk in its own window.
// The projector window opens on the second screen (the projector) in full screen when one is connected.
const { app, BrowserWindow, shell, Menu, screen } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 900,
    minHeight: 600,
    title: 'SmartChurch',
    icon: path.join(__dirname, '..', 'icons', 'icon-512.png'),
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, sandbox: true }
  });
  win.loadFile(path.join(__dirname, '..', 'index.html'));
  // The projector is a blank window (about:blank) that the app writes into; anything else goes to the default browser.
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url === 'about:blank' || url === '') {
      return { action: 'allow', overrideBrowserWindowOptions: { width: 1280, height: 720, autoHideMenuBar: true, backgroundColor: '#000000', title: 'Proyector · SmartChurch' } };
    }
    shell.openExternal(url);
    return { action: 'deny' };
  });
  win.webContents.on('did-create-window', child => {
    const main = screen.getDisplayMatching(win.getBounds());
    const other = screen.getAllDisplays().find(d => d.id !== main.id);
    if (other) {
      child.setBounds(other.bounds);
      child.setFullScreen(true);
    }
  });
}

Menu.setApplicationMenu(null);
app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
