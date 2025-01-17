const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const window = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    window.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })