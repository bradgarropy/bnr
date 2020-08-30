#!/usr/bin/env node

const yargs = require("yargs")
const backupCommand = require("./backup")
const restoreCommand = require("./restore")
const {name} = require("../../package.json")

yargs
    .scriptName(name)
    .command(backupCommand)
    .command(restoreCommand)
    .alias("help", "h")
    .alias("version", "v").argv
