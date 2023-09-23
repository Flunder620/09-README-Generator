// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "None"){
    return ""
  }
  if(license === "MIT License"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license ==="Apache License 2.0"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if(license === "GPL 3.0"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "None"){
    return ""
  }
  else{
    return "- [License](#license)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "None"){
    return ""
  }
  else{
    return `## License

  This project is licensed under the ${license}
  `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}

## Description

${renderLicenseBadge(data.license)}

${data.description}

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [Credits](#credits)

${renderLicenseLink(data.license)}

- [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## Contributions

${data.contribution}

${renderLicenseSection(data.license)}

## Questions

For any questions about this repo, contact me at ${data.github} or at ${data.email}
`;
}

module.exports = generateMarkdown;
