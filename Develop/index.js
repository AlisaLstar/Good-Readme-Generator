const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// array of questions for user

const questions = [
    {
        type: "input", 
        name: "title",
        message: "What is the name of your project?"
    
    }, 

    {
        type: "input", 
        name: "description",
        message: "What is the description?"
    
    },
//  * Title
//   * Description
//   * Table of Contents
//   * Installation
//   * Usage
//   * License
//   * Contributing
//   * Tests
//   * Questions


];

// function to write README file
function writeToFile(fileName, data) {
 fs.writeFileSync(fileName, data, "utf8");

}

// function to initialize program
function init() {
    inquirer.prompt(questions) 
        .then(function(answer){
           const markdown = generateMarkdown(answer);
           writeToFile("./readme.md", markdown)
           console.log(markdown);
        })
        .catch(function(error){
            console.log(error)
        });

}

// function call to initialize program
init();
