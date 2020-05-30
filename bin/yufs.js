#!/usr/bin/env node


const program = require('commander');
const fo = require("../lib/fs");
const os = require('os')


program.version('v'+require("../package.json").version, '-v, --version')
.description("This is a npm file system  command line tool!");

// program.command('copy <src> <dst>')
// .alias('c')
// .description('copy file or directory from src to dst')
// .action(function(src, dst) {
//     fo.copy(src, dst);
//     console.log('copy successfully!');
// })

program.command('move <src> <dst>')
.alias('m')
.description('move file or directory from src to dst')
.action(function(src, dst, cmd) {
    // console.log('----------', cmd.parent);
    if (fo.moveSync(src, dst))
        console.log('move successfully!');
})


program.parse(process.argv);
if (program.args.length === 0) {
    program.help()
  }