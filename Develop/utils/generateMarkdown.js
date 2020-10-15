// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${data.description}
  
  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Username](#username)
- [Email](#email)
  ${data.tableOfContents}

  ## Installation
  Please follow the **link** to YouTube below for installation.
  [![Good ReadMe Generator Installation](./assets/youtube.jpg)](http://www.youtube.com/watch?v=${data.installation} "Good ReadMe Generator Installation")

 
  
  ## Usage
  ![Usage Image](./assets/usage.png)
  ${data.usage}


  ## License
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")
  

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

  ## Username
  ![Usage Image](./assets/github.png)
  - [GitHub Profile](https://github.com/${data.username});
  

  ## Email

  ${data.email}


`;
}

module.exports = generateMarkdown;
