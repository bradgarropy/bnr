const shell = require("../utils/shell")

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
    // settings
    shell(
        "cp /d/projects/dotfiles/voicemeeter/settings.xml /c/users/bradg/appdata/roaming/voicemeeterpotatodefault.xml",
    )

    // macros
    shell(
        "cp /d/projects/dotfiles/voicemeeter/macros.xml /c/users/bradg/documents/voicemeeter/macrobuttonconfig.xml",
    )
}

module.exports = {backup, restore}
