const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your projects title?",
        name: "title",
    },
    {
        type: "input",
        message: "Give a description of your project:",
        name: "description",
    },
    {
        type: "input",
        message: "Explain the installation instructions:",
        name: "installation",
        // choices: ["MIT",],
    },
    {
        type: "input",
        message: "What is the usage information?",
        name: "usage",
    },
    {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contribution",
    },
    {
        type: "input",
        message: "What are the test instructions?",
        name: "instructions",
    },
    {
        type: "list",
        message: "What license would you like to use?",
        name: "license",
        choices: ["MIT", "GNU AGPLv3", "GNU GPLv3", "The Unlicense"]
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your GitHub?",
        name: "github",
    },

];

// function to write README file
function writeToFile(fileName, data) {

    return fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("Success!");
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("README.md", generateMarkdown(data));

        });

}


// function call to initialize program
init();
