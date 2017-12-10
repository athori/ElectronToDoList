const electron = require('electron')
const app = electron.app
const BroserWindow = electron.BrowserWindow

const Menu = electron.Menu;

//creates main window
app.on('ready', _=>{
    mainWindow = new BrowserWindow({
        width: 600,
        height: 600
    })

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    const menu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(menu);
})//end main maindow

const menuTemplate = [

]