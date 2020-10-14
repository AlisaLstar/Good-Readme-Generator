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

    {
        type: "input", 
        name: "installation",
        message: "What are the steps to installation?"
    
    }, 

    {
        type: "input", 
        name: "usage",
        message: "What are the instrcutions of how to use your App?"
    
    }, 

    {
        type: "list", 
        name: "license",
        message: "Please select the license for your project!",
        choices: [
                "MIT",
                "BSD",
                "GLP",
                "CC"
                 ]
    }, 

    {
        type: "input", 
        name: "contributing",
        message: "Who are the contributors of your project?"
    
    }, 

    {
        type: "input", 
        name: "tests",
        message: "How do you test your porject?"
    
    }, 

    {
        type: "input", 
        name: "questions",
        message: "Please contact if you have a question?"
    
    }, 

    {
        type: "input", 
        name: "username",
        message: "What is your Github username?"
    
    }, 
    {
        type: "input", 
        name: "email",
        message: "What is your email?"
    
    }, 

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




