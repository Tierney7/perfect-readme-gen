const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateReadme = require('./utils/generateMarkdown');


function askUser(){
  return inquirer.createPromptModule([
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

  {
    type: "input",
    name: "tests",
    message: "test application"
  },

  {
    type: "input",
    name: "questions",
    message: "Questions?"
  },

  {
    type: "input",
    name: "username",
    message: "Enter Github username:"
  },

  {
    type: "input",
    name: "email",
    message: "Enter email:"
  }
  ]);
}

  async function init() {
try {
    const answers = await askUser();
    const generateContent = generateReadme(answers);
    await writeFilesAsync('./dist/README.md', generateContent);
    console.log('posted to README.md');
}   catch(error) {
    console.log(error);
}
}
 init(); 

 module.exports = questions;
