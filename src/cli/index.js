#!/usr/bin/env node

const yargs = require("yargs")
const defaultCommand = require("./default")
const {name} = require("../../package.json")

yargs
    .scriptName(name)
    .command(defaultCommand)
    .alias("help", "h")
    .alias("version", "v").argv
