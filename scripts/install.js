'use strict';

const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const contentPath = resolveApp(appDirectory);
const rootDir = resolveApp("../../");
const installFile = resolveApp('scripts/install.js')

function copyPublicFolder() {
    try{
        fs.copySync(contentPath, rootDir, {
            dereference: true,
            filter: file => file !== installFile,
        });
    }
    catch(e){}
}
copyPublicFolder();