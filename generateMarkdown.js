// TODO: Create a function that returns a license badge based on which license is passed in
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function generateLicense(data) {
  if (data.licenses === "MIT License") {
    data.licenses = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (data.licenses === "APACHE 2.0") {
    data.licenses = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else data.licenses = '';
};  

// TODO: Create a function to generate markdown for README

function generateMarkdown(data){
    if (data.licenses === "MIT License") {
        data.licenses = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      }
      if (data.licenses === "APACHE 2.0") {
        data.licenses = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      };
    
  return `# Table of Contents
  1. [Title](#Title)
  2. [Description](#Description)
  3. [Installation](#Installation)
  4. [Benefits](#Benefits)
  5. [Licenses](#Licenses)
  6. [Contributions](#Contributions)
  7. [Test](#Test)
  8. [Github](#Github)
  9. [Email](#Email)
  
  # ${data.title}
# Description
${data.description}
# Installation
${data.installation}
# Benefits
${data.benefits}
# Licenses
${data.licenses}
# Contributions
${data.contributions}
# Test
${data.test}
# Github
${data.github}
# Email
${data.email}
`;
};  
module.exports = generateMarkdown;
//  return `# ${data.title}`  