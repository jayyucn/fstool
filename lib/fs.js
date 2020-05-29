const fse = require('fs-extra');


exports.copy = function (src, dst) {
    fse.copy(src, dst);
}

exports.move = function (src, dst) {
    if(!fse.existsSync(src))
    {
        console.error('[ERROR] 目标路径不存在: ', src);
        return false;
    }
    fse.move(src, dst);
    return true;
}

exports.moveSync = function (src, dst) {
    if(!fse.existsSync(src))
    {
        console.error('[ERROR] 目标路径不存在: ', src);
        return false;
    }
    fse.moveSync(src, dst);
    return true;
}