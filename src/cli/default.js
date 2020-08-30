const npm = require("../npm")
const obs = require("../obs")
const vscode = require("../vscode")
const git = require("../utils/git")
const streamdeck = require("../streamdeck")
const voicemeeter = require("../voicemeeter")

const command = "* [app]"
const description = ""

const builder = yargs => {
    yargs
        .positional("app", {
            type: "string",
            choices: [
                "all",
                "npm",
                "obs",
                "streamdeck",
                "voicemeeter",
                "vscode",
            ],
            default: "all",
        })
        .option("commit", {
            alias: "c",
            type: "boolean",
            default: false,
        })
}

const handler = argv => {
    console.log(argv)

    const {app, commit} = argv

    switch (app) {
        case "npm":
            npm.backup()
            break

        case "obs":
            obs.backup()
            break

        case "streamdeck":
            streamdeck.backup()
            break

        case "voicemeeter":
            voicemeeter.backup()
            break

        case "vscode":
            vscode.backup()
            break

        case "all":
            npm.backup()
            obs.backup()
            streamdeck.backup()
            voicemeeter.backup()
            vscode.backup()
            break
    }

    // commit changes
    if (commit) {
        const message =
            app === "all" ? "update settings." : `update ${app} settings.`

        git.commit(message)
    }

    // log diff
    else {
        git.diff()
    }
}

module.exports = {
    command,
    description,
    builder,
    handler,
}
