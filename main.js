const {app, BrowserWindow } = require('electron')

const path = require('path')
const electron = require('electron')

require('electron-reload')(__dirname)

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile(path.resolve(__dirname, 'index.html'))

    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('windows-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
