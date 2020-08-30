const shell = require("../utils/shell")

const backup = () => {
    // profiles
    shell(
        "cp -r /c/users/bradg/appdata/roaming/elgato/streamdeck/profilesv2/* /d/projects/dotfiles/streamdeck/profiles",
    )
}

const restore = () => {
    // profiles
    shell(
        "cp -r /d/projects/dotfiles/streamdeck/profiles/* /c/users/bradg/appdata/roaming/elgato/streamdeck/profilesv2",
    )
}

module.exports = {backup, restore}
