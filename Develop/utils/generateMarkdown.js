// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${data.description}
  
  ## Table of Contents
  ${data.tableOfContents}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

  ## Username
  ${data.username}
  
  ## Email
  ${data.email}
  


`;
}

module.exports = generateMarkdown;
