const fs = require("fs")
const shell = require("../utils/shell")

const REPO_NAME = "dotfiles"
const REPO_URL = `https://github.com/bradgarropy/${REPO_NAME}.git`
const EXTENSIONS = "extensions.txt"

shell(`git clone ${REPO_URL}`)

const text = fs.readFileSync(`${REPO_NAME}/vscode/${EXTENSIONS}`, "utf8")
const extensions = text.split("\n").filter(line => line)

extensions.forEach(extension => shell(`code --install-extension ${extension}`))

shell(`rm -rf ${REPO_NAME}`)
