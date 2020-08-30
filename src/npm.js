const fs = require("fs")
const shell = require("./utils/shell")

const backup = () => {
    // packages
    const text = shell("npm list --global=true --depth=0 --json=true")
    const json = JSON.parse(text)
    const packages = Object.keys(json.dependencies)

    fs.writeFileSync(
        "d:\\projects\\dotfiles\\npm\\packages.json",
        JSON.stringify(packages, null, 4),
    )
}

const restore = () => {
    // packages
    const text = fs.readFileSync(
        "d:\\projects\\dotfiles\\npm\\packages.json",
        "utf8",
    )

    text.split("\n")
        .filter(line => line)
        .forEach(pkg => shell(`npm install ${pkg} --global`))
}

module.exports = {backup, restore}
