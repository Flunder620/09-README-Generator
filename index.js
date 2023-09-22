// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter your description: "
    },
    {
        type: "input",
        name: "install",
        message: "Enter installation instructions: "
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information: "
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter your contribution guidelines: "
    },
    {
        type: "input",
        name: "test",
        message: "Enter test instructions: "
    },
    {
        type: "list",
        name: "license",
        message: "Please Choose a license: ",
        choices: ["MIT License", "Apache License 2.0", "GPL 3.0", "None"]
    },
    {
        type: "input",
        name:"github",
        message:"What is your github user name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your E-Mail address?"
    }
];
// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
        fs.writeFileSync("README-Generated.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
