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

    // remove bak files
    const files = shell("find /d/projects/dotfiles/obs -name *.bak")

    files
        .split("\n")
        .filter(file => file)
        .forEach(file => shell(`rm ${file}`))
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
