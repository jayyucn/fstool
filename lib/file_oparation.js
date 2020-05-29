const fse = require('fs-extra');


export function copy(src, dst) {
    fse.copy(src, dst);
}