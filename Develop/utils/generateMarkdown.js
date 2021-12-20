// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "The Apache License") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "IBM License") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  } else if (license === "The MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "GNU License") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "N/A") {
    return "No License Applicable";
  }
}

// TODO: Create a function to generate markdown for README
// is taking care of my actual README content
function generateMarkdown(data) {
  return new Promise(function (resolve, reject) {
    const myError = false;

    const markdownString = `# ${data.title}

## License

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

${data.contact}

My Githhub: [${data.github}](${data.githubLink})

My Email: ${data.email}
`;

    if (!myError) {
      resolve(markdownString);
    } else {
      reject("Sorry this got rejected an error occured");
    }
  });
}

module.exports = generateMarkdown;
