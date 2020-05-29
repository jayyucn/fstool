const fse = require('fs-extra');


exports.copy = function copy(src, dst) {
    fse.copy(src, dst);
}