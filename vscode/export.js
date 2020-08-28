const fs = require("fs")
const shell = require("../utils/shell")

const REPO_NAME = "dotfiles"
const REPO_URL = `https://github.com/bradgarropy/${REPO_NAME}.git`
const EXTENSIONS = "extensions.txt"

const extensions = shell("code --list-extensions")
fs.writeFileSync(EXTENSIONS, extensions)

shell(`git clone ${REPO_URL}`)
shell(`mv ${EXTENSIONS} ${REPO_NAME}/vscode`)

const status = shell("git status", {cwd: REPO_NAME})

if (status.includes("nothing to commit, working tree clean")) {
    console.log("no extension changes.")
    shell(`rm -rf ${REPO_NAME}`)
    return
}

shell("git diff", {cwd: REPO_NAME})

shell(`git add vscode/${EXTENSIONS}`, {cwd: REPO_NAME})
shell("git commit -m 'update vscode extensions.'", {cwd: REPO_NAME})
shell("git push", {cwd: REPO_NAME})

shell(`rm -rf ${REPO_NAME}`)
