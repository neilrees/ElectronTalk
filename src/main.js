let {app, BrowserWindow} = require('electron');

app.on('ready', () => {

    let mainWindow = new BrowserWindow();

    mainWindow.loadFile('index.html');

});