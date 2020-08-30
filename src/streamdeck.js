const shell = require("./utils/shell")

const backup = () => {
    // profiles
    shell(
        "cp -r /c/users/bradg/appdata/roaming/elgato/streamdeck/profilesv2 /d/projects/dotfiles/streamdeck/profiles",
    )
}

const restore = () => {
    console.log("restore")
    // profiles
}

module.exports = {backup, restore}
