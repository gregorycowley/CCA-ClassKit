// main.js

const { app, BrowserWindow, ipcMain } = require('electron')
const { mqttConnect } = require('./src/connect/mqtt-connect.js');
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

  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools();

  function sayHello() {
    console.log('Hello2');
    mainWindow.webContents.send('mqtt-message', "hi");
  }

  // Start MQTT connection
  const mqttConnection = mqttConnect();

  mqttConnection.on('message', (topic, msgBuffer) => {
    let strMessage = msgBuffer.toString();
    console.log('Main Listener :: ', topic, strMessage );

    sayHello();
    // Send message to renderer
    // mainWindow.webContents.send('mqtt-message', strMessage);
  });

  // ipcMain.on('set-title', (event, title) => {
  //   const webContents = event.sender
  //   const win = BrowserWindow.fromWebContents(webContents)
  //   win.setTitle(title)
  // })


  // console.log("Sending message to renderer");
  // setTimeout(function () {
  //   mainWindow.webContents.send('mqtt-message', "Testing 123");
  // }, 500);
};

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});

// app.on('web-contents-created', (event, contents) => {
// //  console.log('web-contents-created',contents);
//    // Make changes after the HTML is loaded:
  
// });


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
});


// ipcMain.on('onConnect', (event, connectUrl, connectOpt) => {
//   console.log('ipcMain: onConnect')
//   // con
//   // client = mqtt.connect(connectUrl, connectOpt)
//   client.on('connect', () => {
//     console.log('Client connected:' + options.clientId)
//   })
//   client.on('message', (topic, message) => {
//     console.log(`${message.toString()}\nOn topic: ${topic}`)
//   })
// });
