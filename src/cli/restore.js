const npm = require("../apps/npm")
const obs = require("../apps/obs")
const vscode = require("../apps/vscode")
const streamdeck = require("../apps/streamdeck")

const command = "restore [app]"
const description = "Restore application settings."

const builder = yargs => {
    yargs.positional("app", {
        type: "string",
        choices: ["all", "npm", "obs", "streamdeck", "vscode"],
        default: "all",
    })
}

const handler = argv => {
    const {app} = argv

    switch (app) {
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
