const fse = require('fs-extra');


exports.copy = function (src, dst) {
    fse.copy(src, dst);
}

exports.move = function (src, dst) {
    fse.copy(src, dst);
}