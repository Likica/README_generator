const Choices = require("inquirer/lib/objects/choices");
// const licenses = require("./licenses.js");
// TODO: Create a function that returns the license Badge
// If there is no license, return an empty string
function renderLicenseBadge(response) {
  // this.licenseBadge = licenseBadge;

  if (response == 'Apache-2.0') {
    licenseBadge = `![License: Apache](https://img.shields.io/badge/License-Apache-blue.svg)`
  }
  else if (response == 'MIT') {
    licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)`
  } else if (response == 'GPL-2.0') {
    licenseBadge = `![GPL license](https://img.shields.io/badge/License-GPL-yellow.svg)`
  } else {
    licenseBadge = 'None'
  }
  return licenseBadge;
};

// renderLicenseBadge();
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(response) {
  if (response == 'Apache-2.0') {
    licenseLink = `[License: Apache-2.0](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (response == 'MIT') {
    licenseLink = `[License: MIT](https://opensource.org/licenses/MIT)`
  } else if (response == 'GPL-2.0') {
    licenseLink = `[License: GPL-2.0](https://opensource.org/licenses/GPL-2.0)`
  } else {
    licenseLink = 'None'
  }
  return licenseLink;
};
// renderLicenseLink();

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(response) {
  let licenseSection = ''
  if (response == 'MIT') {

    licenseSection = 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.';

  }
  if (response == 'Apache-2.0') {

    licenseSection = 'Copyright [yyyy] [name of copyright owner] Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.'
  }
  if (response == 'GPL-2.0') {
    licenseSection = 'GNU GENERAL PUBLIC LICENSE(SPDX short identifier: GPL-2.0) Version 2, June 1991 Copyright (C) 1989, 1991 Free Software Foundation, Inc. 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.'
  }
  return licenseSection;
};
// renderLicenseSection();

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  const content = `# ${response.title}
  ### By ${response.userName} * [Email me](mailto:${response.email}) * 
  * [Deployed Appplication](https://www.github.com/likica.io/READMEgenerator)
 
  ## Table of contents
  * [Description](#Description)
  * [Installation Instructions](#installation-Instructions)
  * [Usage Instructions](#Usage-Instructions)
  * [Questions](#Questions)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
 
  # Description
  ##### [Back to Table of Contents](#Table-of-Contents)
  ${response.description}

  ## User Story
  ##### [Back to Table of Contents](#Table-of-Contents)
  ${response.story}

  ## Installation Instructions
  ##### [Back to Table of Contents](#Table-of-Contents)
  ${response.installation}

  ## Usage Instructions
  ##### [Back to Table of Contents](#Table-of-Contents)
  ${response.usage}

  ## Contributing
  ##### [Back to Table of Contents](#Table-of-Contents)
  ${response.contributing}

  ## Tests
  #### [Back to Table of Contents](#Table-of-Contents)
  1. ${response.tests}
  2. ${response.tests1}

  ## Questions
  ##### [Back to Table of Contents](#Table-of-Contents)
  * If you have any questions, please contact me at ${response.email}

  ## License 
  * License Type: ${response.license}
    ${renderLicenseBadge(response.license)}
    ${renderLicenseLink(response.license)}
    ${renderLicenseSection(response.license)}


  _This README was generated by Likica with_ ❤️ [READMEgenerator](https://github.com/likica/READMEgenerator)
 
  `
  return content;

};

module.exports = generateMarkdown;
