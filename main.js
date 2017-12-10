const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const Menu = electron.Menu

//creates main window
app.on('ready', _=>{
    mainWindow = new BrowserWindow({
        width: 600,
        height: 600
    })

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    const menu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(menu);

    mainWindow.on('closed',_=>{
        console.log('closed');
        mainWindow = null;
    })
})//end main maindow

const menuTemplate = [
    {
        label : electron.app.getName(),
        submenu : [
            {
                label : 'quit',
                click : _=>{
                    app.quit()
                }, 
                accelerator: 'Ctrl+Q'
            }
        ]
    },
    {
        label : 'File',
        submenu : [
            {
                label : 'Save File'
            },
            {
                type : 'separator'
            },
            {
                label : 'Open File'
            }
        ]
    },
    {
        label : "Add Item"
    },
    {
        label : "Clear All Items"
    },
    {

    }
]