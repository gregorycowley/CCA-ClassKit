// main.js

const { app, BrowserWindow, session } = require('electron')
const path = require('node:path')

const env = process.env.NODE_ENV || 'development';
if (env === 'development') { 
  require('electron-reload')(__dirname, { 
      electron: path.join(__dirname, 'node_modules', '.bin', 'electron'), 
      hardResetMethod: 'exit'
  }); 
} 

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })


  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  // session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
  //   callback({
  //     responseHeaders: {
  //       ...details.responseHeaders,
  //       'Content-Security-Policy': ['script-src \'self\'']
  //     }
  //   })
  // })

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

