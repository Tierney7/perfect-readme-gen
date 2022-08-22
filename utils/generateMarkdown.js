
function renderLicenseBadge(license) {}
function renderLicenseLink(license) {}
function renderLicenseSection(license) {}

function generateMarkdown(data) {
  return `# ${data.title}
          # ${data.installation}
          # ${data.usage}        
        `
  }

module.exports = generateMarkdown;