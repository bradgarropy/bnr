const fs = require("fs")
const shell = require("./utils/shell")

const backup = () => {
    // extensions
    const extensions = shell("code --list-extensions")
        .split("\n")
        .filter(ext => ext)

    fs.writeFileSync(
        "d:\\projects\\dotfiles\\vscode\\extensions.json",
        JSON.stringify(extensions, null, 4),
    )

    // settings
    shell(
        "cp /c/users/bradg/appdata/roaming/code/user/settings.json /d/projects/dotfiles/vscode/settings.json",
    )
}

const restore = () => {
    // extensions
    const text = fs.readFileSync(
        "d:\\projects\\dotfiles\\vscode\\extensions.json",
        "utf8",
    )

    text.split("\n")
        .filter(line => line)
        .forEach(extension => {
            shell(`code --install-extension ${extension}`)
        })

    // settings
}

module.exports = {backup, restore}
