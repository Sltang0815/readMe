// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  

### License
______________________________________

  ${data.license}

  Choose a license https://choosealicense.com/
  ![license] (img.shields.io/badge/license-MIT-brightgreen)

  http://github.com - automatic!
[GitHub](http://github.com)
  
## Table of Contents
______________________________________

  Description |
  Installation |
  Usage |
  Contributing Guidelines |
  Tests |
  Questions|


## Description  
______________________________________
  
  ${data.description} 

## Installation Instructions
______________________________________

  ${data.installation}

## Usage Information
______________________________________

  ${data.usage}

## Contribution Guidelines 
______________________________________

  ${data.contribution}

## Test Instructions
______________________________________

  ${data.instructions}

## Questions
______________________________________

  [Email] (${data.email})
  
  [GitHub](${data.github})






`;
}

module.exports = generateMarkdown;
