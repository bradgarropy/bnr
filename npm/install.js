const fs = require("fs")
const shell = require("../utils/shell")

const REPO_NAME = "dotfiles"
const REPO_URL = `https://github.com/bradgarropy/${REPO_NAME}.git`
const PACKAGES = "packages.txt"

shell(`git clone ${REPO_URL}`)

const text = fs.readFileSync(`${REPO_NAME}/npm/${PACKAGES}`, "utf8")
const packages = text.split("\n").filter(line => line)

packages.forEach(pkg => shell(`npm install ${pkg} --global`))

shell(`rm -rf ${REPO_NAME}`)
