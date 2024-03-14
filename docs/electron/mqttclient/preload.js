// preload.js
// All the Node.js APIs are available in the preload process.

const { ipcRenderer, contextBridge } = require('electron');

// Here we create the bridge to send MQTT messages to the 
// Web Page.

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => ipcRenderer.send('set-title', title)
})

// // It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {

  // window.mqtt = mqtt;
  window.ipcRenderer = ipcRenderer;

  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})