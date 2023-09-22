// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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


];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
