const shell = require("./utils/shell")

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
    console.log("restore")
    // profiles
    // scenes
}

module.exports = {backup, restore}
