const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


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

}

// function to initialize program
function init() {
    inquirer.prompt(questions) 
        .then(function(answer){
           const markdown = generateMarkdown(answer);
           console.log(markdown);
        })
        .catch(function(error){
            console.log(error)
        });

}

// function call to initialize program
init();
