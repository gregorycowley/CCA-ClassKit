// main.js

const { app, BrowserWindow, ipcMain } = require('electron')
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
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // Here we add the code to respond to MQTT

  ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)
  })

  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('onConnect', (event, connectUrl, connectOpt) => {
  client = mqtt.connect(connectUrl, connectOpt)
  client.on('connect', () => {
    console.log('Client connected:' + options.clientId)
  })
  client.on('message', (topic, message) => {
    console.log(`${message.toString()}\nOn topic: ${topic}`)
  })
})


// Connect to the MQTT broker

const clientId = "greg012"
const mqtt = require('mqtt')

console.log("MQTT Module Information: ", mqtt);

console.log('connecting mqtt client')
const client = mqtt.connect("mqtt://192.168.86.95", {port:1883})

client.on('error', (err) => {
  console.log('Connection error: ', err)
  client.end()
})

client.on('reconnect', () => {
  console.log('Reconnecting...')
})

client.on('connect', () => {
  console.log('Client connected:' + clientId)
  client.subscribe('electron/#', {
    qos: 0
  })
  client.publish('electron', 'Electron connection demo...!', {
    qos: 0,
    retain: false
  })
})

client.on("message", (topic,message) => {
  console.log( message.toString());
} )

