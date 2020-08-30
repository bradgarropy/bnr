const shell = require("./shell")

const cwd = "d:\\projects\\dotfiles"
const options = {cwd}

const commit = message => {
    shell("ls", options)
    shell("git add .", options)
    shell("git status", options)
    shell(`git commit -m "${message}"`, options)
    shell("git push", options)
}

const diff = () => {
    shell("git diff --stat", options)
}

module.exports = {commit, diff}
