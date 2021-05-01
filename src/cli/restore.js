const goxlr = require("../apps/goxlr")
const npm = require("../apps/npm")
const obs = require("../apps/obs")
const streamdeck = require("../apps/streamdeck")
const vscode = require("../apps/vscode")

const command = "restore [app]"
const description = "Restore application settings."

const builder = yargs => {
    yargs.positional("app", {
        type: "string",
        choices: ["all", "goxlr", "npm", "obs", "streamdeck", "vscode"],
        default: "all",
    })
}

const handler = argv => {
    const {app} = argv

    switch (app) {
        case "goxlr":
            goxlr.restore()
            break

        case "npm":
            npm.restore()
            break

        case "obs":
            obs.restore()
            break

        case "streamdeck":
            streamdeck.restore()
            break

        case "vscode":
            vscode.restore()
            break

        case "all":
            goxlr.restore()
            npm.restore()
            obs.restore()
            streamdeck.restore()
            vscode.restore()
            break
    }
}

module.exports = {
    command,
    description,
    builder,
    handler,
}
