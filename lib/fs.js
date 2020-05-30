const fse = require('fs-extra');
const Log = require('./log');
const inquirer = require('inquirer');
const questions = [
    {
        type: "input",
        name: "is_overwrite",
        message: "Overwrite ?:"
    }
]


exports.copy = function (src, dst) {
    fse.copy(src, dst);
}

exports.move = function (src, dst) {
    if(!fse.existsSync(src))
    {
        let path = process.cwd()+'\\'+src;
        Log.error(' Source path does not exist: ', Log.chalk.red(src));
        return false;
    }

    fse.move(src, dst);
    return true;
}

exports.moveSync = async function (src, dst) {
    if(!existsSync(src))
    {
        Log.error(' Source path does not exist: ', Log.chalk.red(src));
        return false;
    }
    let answer = await answers(questions);
    Log.log("======================",answer);
    if(existsSync(dst))
    {
        
    }
    fse.moveSync(src, dst);
    return true;
}

/************************        private        ****************************** */
/************************        private        ****************************** */
/************************        private        ****************************** */


async function answers(questions)
{
    return await inquirer.prompt(questions);
}

/**
 * Synchronously tests whether or not the given path exists by checking with the file system.
 * @param path A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 */
function existsSync(path)
{
    let stat = fse.statSync(path);
    if (stat.isDirectory() || stat.isFile())
    {
        return fse.existsSync(path)
    }
    Log.error('Path is neither a file or a directory. ', Log.chalk.red(path));
    return false;

}