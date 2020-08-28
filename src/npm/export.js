const fs = require("fs")
const shell = require("../utils/shell")

const REPO_NAME = "dotfiles"
const REPO_URL = `https://github.com/bradgarropy/${REPO_NAME}.git`
const PACKAGES = "packages.txt"

const text = shell("npm list -g --depth=0")
const packages = text
    .split("\n")
    .filter(line => line.startsWith("├──") || line.startsWith("└──"))
    .map(pkg => pkg.substring(3))
    .map(pkg => pkg.trim())
    .map(pkg => pkg.slice(0, pkg.lastIndexOf("@")))
    .join("\n")
    .concat("\n")

console.log(packages)
fs.writeFileSync(PACKAGES, packages)

shell(`git clone ${REPO_URL}`)
shell(`mv ${PACKAGES} ${REPO_NAME}/npm`)

const status = shell("git status", {cwd: REPO_NAME})

if (status.includes("nothing to commit, working tree clean")) {
    console.log("no package changes.")
    shell(`rm -rf ${REPO_NAME}`)
    return
}

shell("git diff", {cwd: REPO_NAME})

shell(`git add npm/${PACKAGES}`, {cwd: REPO_NAME})
shell("git commit -m 'update npm packages.'", {cwd: REPO_NAME})
shell("git push", {cwd: REPO_NAME})

shell(`rm -rf ${REPO_NAME}`)
