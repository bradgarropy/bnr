const shell = require("../utils/shell")

const backup = () => {
    // presets
    shell(
        "cp -r /c/users/bradg/documents/goxlr/presets /d/projects/dotfiles/goxlr",
    )

    // profiles
    shell(
        "cp -r /c/users/bradg/documents/goxlr/profiles /d/projects/dotfiles/goxlr",
    )

    // samples
    shell(
        "cp -r /c/users/bradg/documents/goxlr/samples /d/projects/dotfiles/goxlr",
    )
}

const restore = () => {
    // presets
    // shell(
    //     "cp -r /d/projects/dotfiles/goxlr/presets/* /c/users/bradg/documents/goxlr/presets",
    // )

    // profiles
    shell(
        "cp -r /d/projects/dotfiles/goxlr/profiles/* /c/users/bradg/documents/goxlr/profiles",
    )

    // samples
    // shell(
    //     "cp -r /d/projects/dotfiles/goxlr/samples/* /c/users/bradg/documents/goxlr/samples",
    // )
}

module.exports = {backup, restore}
