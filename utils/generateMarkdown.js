// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  

## Table of Contents

  |Title |
  
  Description 
  Installation 
  Usage |
  Contributing Guidelines 
  Tests 
  Questions


### Description  
  
  ${data.description} 

### Installation Instructions

  ${data.installation}

### Usage Information

  ${data.usage}

### Contribution Guidelines 

  ${data.contribution}

### Test Instructions

  ${data.instructions}

### License

  ${data.license}

  Choose a license https://choosealicense.com/
  ![license] (img.shields.io/badge/license-MIT-brightgreen)

  http://github.com - automatic!
[GitHub](http://github.com)





`;
}

module.exports = generateMarkdown;
