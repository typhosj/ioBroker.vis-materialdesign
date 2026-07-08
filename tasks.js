const { cpSync, existsSync, mkdirSync, rmSync } = require('node:fs');
const { execFileSync } = require('node:child_process');
const adapterName = require('./package.json').name.replace('iobroker.', '');

const SRC_TS = 'src-widgets-ts/';
const srcTs = `${__dirname}/${SRC_TS}`;
const widgetTarget = `${__dirname}/widgets/${adapterName}`;

function clean() {
    rmSync(`${srcTs}build`, { recursive: true, force: true });
    rmSync(widgetTarget, { recursive: true, force: true });
}

function copyAllFiles() {
    mkdirSync(widgetTarget, { recursive: true });
    cpSync(`${srcTs}build/customWidgets.js`, `${widgetTarget}/customWidgets.js`);
    if (existsSync(`${srcTs}build/assets`)) {
        cpSync(`${srcTs}build/assets`, `${widgetTarget}/assets`, { recursive: true });
    }
}

clean();

if (!existsSync(`${srcTs}/node_modules`)) {
    execFileSync('npm', ['install'], { cwd: srcTs, stdio: 'inherit' });
}

execFileSync('npm', ['run', 'build'], { cwd: srcTs, stdio: 'inherit' });
copyAllFiles();
