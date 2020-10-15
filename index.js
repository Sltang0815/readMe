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
        message: "Give a description of your project",
        name: "description",
    },
    {
        type: "lists",
        message: "Give a description of your project",
        name: "description",
        choices: ["MIT",],
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
