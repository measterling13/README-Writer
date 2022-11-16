// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'repoName',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a breif description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps should be taken for installation?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this application?',
    },
    {
        type: 'list',
        name: 'lisence',
        message: 'What license is being used?',
        choices: ['MIT', 'someting', 'tacos', 'deadpool'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who has contributing to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What test are used in this application?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email for contact?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    console.log(data);

    const fileContent = generate(data);

    fs.writeFile(fileName, fileContent, (err) =>
            err ? console.log(err) : console.log('Successfully created file.')
        );
        
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
