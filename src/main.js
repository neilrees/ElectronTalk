let {app, BrowserWindow} = require('electron');

app.on('ready', () => {

    let mainWindow = new BrowserWindow();

    mainWindow.loadURL("https://www.google.co.uk");

});