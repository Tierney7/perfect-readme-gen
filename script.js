const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./generateMarkdown')
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
{
    type: "input",
    name: "title",
    message: "Project name?"
 },
 {
    type: "input",
    name: "description",
    message: "Describe project"
 },
 {
    type: "input",
    name: "installation",
    message: "Installation process"
 },
    {
        type: "list",
    name: "usage",
    message: "Project use"
    },

    {
        type: "input",
        name: "Credits",
        message: "List collaberators, and or links to third party assets"
      },

{
    type: "list",
    name: "license",
    message: "Select License",
    choices: [
        "MIT",
        "Apache",
        "GNU",
        "Academic",
        "Open",
        "ISC"
    ]
  },

  ]