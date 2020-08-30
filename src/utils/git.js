const shell = require("./shell")

const cwd = "d:\\projects\\dotfiles"
const options = {cwd}

const commit = () => {
    shell("git add .", options)
    shell("git commit -m 'update voicemeeter settings.'", options)
    shell("git push", options)
}

const diff = () => {
    shell("git diff --stat", options)
}

module.exports = {commit, diff}
