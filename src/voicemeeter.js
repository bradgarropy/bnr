const fs = require("fs")
const shell = require("./utils/shell")

const args = process.argv.slice(2)
const commit = ["-c", "--commit"].includes(args[0])

// settings
fs.copyFileSync(
    "C:\\Users\\bradg\\AppData\\Roaming\\VoiceMeeterPotatoDefault.xml",
    "D:\\projects\\dotfiles\\voicemeeter\\settings.xml",
)

// macros
fs.copyFileSync(
    "C:\\Users\\bradg\\Documents\\Voicemeeter\\MacroButtonConfig.xml",
    "D:\\projects\\dotfiles\\voicemeeter\\macros.xml",
)

// commit changes
if (commit) {
    const cwd = "D:\\projects\\dotfiles"
    const options = {cwd}

    shell("git add .", options)
    shell("git commit -m 'update voicemeeter settings.'", options)
    shell("git push", options)
}

// log diff
else {
    const cwd = "D:\\projects\\dotfiles"
    const options = {cwd}

    shell("git diff --stat", options)
}
