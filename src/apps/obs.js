const shell = require("../utils/shell")

const backup = () => {
    // profiles
    shell(
        "cp -r /c/users/bradg/appdata/roaming/obs-studio/basic/profiles /d/projects/dotfiles/obs",
    )

    // scenes
    shell(
        "cp -r /c/users/bradg/appdata/roaming/obs-studio/basic/scenes /d/projects/dotfiles/obs",
    )
}

const restore = () => {
    // profiles
    shell(
        "cp -r /d/projects/dotfiles/obs/profiles/* /c/users/bradg/appdata/roaming/obs-studio/basic/profiles",
    )

    // scenes
    shell(
        "cp -r /d/projects/dotfiles/obs/scenes/* /c/users/bradg/appdata/roaming/obs-studio/basic/scenes",
    )
}

module.exports = {backup, restore}
