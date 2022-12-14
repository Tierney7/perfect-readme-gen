function renderLicenseBadge(license) {}
function renderLicenseLink(license) {}
function renderLicenseSection(license) {}


function generateMarkdown(data) {
  return `
    # ${data.title}
    ## Table of Contents:
    ###  * [Installation](#installation)
    ###  * [Usage](#usage)
    ###  * [Contribute](#contribute)
    ###  * [Tests](#tests)
    ###  * [Licenses](#licenses)
    ###  * [Questions](#questions)
    ## Installation:
    ### You must install the following for this app to function:
    ### ${data.installation}
    ## Usage:
    ### ${data.usage}
    ## Contribute:
    ### ${data.contribution}
    ## Tests:
    ### Run the following commands in your terminal to test this app:
    ### ${data.test}
    ## Licenses:
    ### ${data.licenses}
    ## Questions:
    ### If you have any questions, you may contact me at either
    ### Github: https://github.com/${data.username}
    ### or
    ### Email: ${data.email}
  `;   
} 

module.exports = generateMarkdown;