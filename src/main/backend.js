const { spawn } = require('child_process');
const log = require('electron-log');

const API_PATH = './resources/TimeDemo.dll';

class Backend {
    constructor() {
        this.process = null;
    }

    start() {
        return new Promise((resolve, reject) =>
        {
            this.process = spawn('dotnet', [API_PATH]);

            log.debug(`Started ${API_PATH} with pid ${this.process.pid}`);

            this.process.stdout.on('data', (data) => {
                log.debug(`stdout: ${data}`);
            });

            this.process.stderr.on('data', (data) => {
                log.error(`stderr: ${data}`);
            });

            this.process.on('error', (err) => {
                log.error(`Error: Error from server: ${err}`);
            });

            this.process.on('exit', () => {
                log.info(`Server exited`);
            });

            resolve();
        });
    }

    stop() {
        return new Promise((resolve, reject) => {
            this.process.kill();
            log.info(`Server killed`);

            resolve();
        });
    }
}

module.exports = {Backend};