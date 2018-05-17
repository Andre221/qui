const path = require('path')
const url = require('url')
const electron = require('electron')
const loggic = require('loggic')

const logger = new loggic.logger()
const app = electron.app
const BrowserWindow = electron.BrowserWindow

logger.addTemplate('start', {
  text: 'App started',
  color: 'green'
}, 'window')
logger.addTemplate('quit', {
  text: 'App closed',
  color: 'yellow'
}, 'window')

let mainWindow
var windowConf = require('./configuration/window')

function createWindow() {
  mainWindow = new BrowserWindow(windowConf)

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/interface/interface.html'),
    protocol: 'file:',
    slashes: true,
    icon: path.join(__dirname, 'assets/player.png')
  }))

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', () => {
  logger.loadFromTemplate('start')
  createWindow()
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
    logger.loadFromTemplate('quit')
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})