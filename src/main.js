const {app, BrowserWindow} = require('electron');
const {Backend} = require('./main/backend');
const {DemoUpdater} = require('./main/updater');

let backend = new Backend();
let updater = new DemoUpdater();
app.on('ready', () => {
    backend.start().then(() =>{
        let mainWindow = new BrowserWindow();

        mainWindow.loadFile('renderer/index.html');

        updater.checkForUpdates();
    });
});

app.on('window-all-closed', () => {
    backend.stop().then(() => {
        app.quit();
    });
});