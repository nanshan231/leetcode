const fs = require("fs");
const path = require("path");
const beautify = require("js-beautify").js;
const colors = require("colors");

const args = process.argv;
//args[0]: The first element will be process.execPath
//args[1]: The second element will be the path to the JavaScript file being executed
const folderPath = path.join(__dirname, args[2]);

if (fs.existsSync(folderPath)) {
  console.error(colors.red("Failed! The folder has existed!"), "\n");
  process.exit();
}

fs.mkdir(folderPath, () => {
  createFile("app.js", "appTemplate.js");
  createFile("test.js", "testTemplate.js");

  console.log(colors.green("Create successfully!"), "\n");
});

function createFile(fileName, templateName) {
  const templatePath = path.join(__dirname, "template");
  fs.writeFileSync(
    path.join(folderPath, fileName),
    beautify(
      fs.readFileSync(path.join(templatePath, templateName), {
        encoding: "utf8"
      }),
      {
        indent_size: 2,
        indent_with_tabs: false
      }
    )
  );
}
