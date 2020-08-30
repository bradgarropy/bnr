const shell = require("./utils/shell")

const backup = () => {
    // settings
    shell(
        "cp /c/users/bradg/appdata/roaming/voicemeeterpotatodefault.xml /d/projects/dotfiles/voicemeeter/settings.xml",
    )

    // macros
    shell(
        "cp /c/users/bradg/documents/voicemeeter/macrobuttonconfig.xml /d/projects/dotfiles/voicemeeter/macros.xml",
    )
}

const restore = () => {
    console.log("restore")
    // settings
    // macros
}

module.exports = {backup, restore}
