

Include `'use strict'` at the top of every file to enable strict mode. This catches common coding errors and "unsafe" actions. It also prevents the use of undeclared variables.

## Can the module.exports property be assigned a string?
There was an issue around assigning a string to the `module.exports`. It seems to be fine now. Be cautious about this. 

This issue is around exporting a function that returns a string. If the function is not called, the whole function syntax in string form  will be inserted into the HTML.

## Use template literals to create a string with multiple lines
```javascript
const str = `This is a string
with multiple lines 
in it.`;
```

## The app is two parts:
the main.js handles the main process and the renderer.js handles the rendering process. This is to isloate the main process, which has access to the the system, from the renderer process, which has access to the DOM.

Use ipcMain and ipcRenderer to communicate between the two processes.

# Content-Security-Policy
Keep an eye on the Content-Security-Policy set in the index.html file. It can be set to block inline CSS. For the moment inline CSS is needed to move objects around the screen.