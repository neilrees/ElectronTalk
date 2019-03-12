const { autoUpdater } = require("electron-updater");
const log = require("electron-log");

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = "debug";

class DemoUpdater {
    constructor() {
        autoUpdater.autoDownload = true;
        autoUpdater.autoInstallOnAppQuit = true;
        autoUpdater.logger = log;

        autoUpdater.on('checking-for-update', () => {
            log.debug('Checking for update...');
        });

        autoUpdater.on('update-available', (e) => {
            log.debug(`Update to version ${e.version} available.`);
        });

        autoUpdater.on('update-not-available', () => {
            log.debug('Update not available.');
        });

        autoUpdater.on('error', (error) => {
            log.error(`Error in auto-updater: ${error.message}`);
        });

        autoUpdater.on('update-downloaded', (e) => {
            log.info(`Version ${e.version} has been downloaded and will be installed on quitting the application`);
        });
    }

    checkForUpdates() {
        autoUpdater.checkForUpdatesAndNotify();
    }
}

module.exports = {DemoUpdater};