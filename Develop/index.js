//used https://www.youtube.com/watch?v=Pp9IG-prQjE for instructions //

// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
// const licenses = require('./utils/licenses');
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please provide the title of your project/repository:",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide description of your project. At a minimum, your project README needs a title and a short description explaining the what, why, and how. What was your motivation? Why did you build this project? What problem does it solve? What did you learn? What makes your project stand out?",
    },
    {
        type: "input",
        name: "story",
        message: "What is the user story for your project? ",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide instructions on installation process of your project (if any): ",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide a step-by-step description of how to use this application",
    },
    {
        type: "list",
        name: "license",
        message: "Please choose license type: (If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)",
        choices: [
            "Apache-2.0",
            "GPL-2.0",
            "MIT",
            "None"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "If you wish others to contribute, please add your contribution criteria here:",
    },
    {
        type: "input",
        name: "tests",
        message: "Please include your test(s) (if any).",
    },
    {
        type: "input",
        name: "tests1",
        message: "Please include your additional test(s) (if any).",
    },
    {
        type: "input",
        name: "userName",
        message: "Please enter your GitHub username: "
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Please enter your Github profile link:',
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }
]
// console.log(questions)

// TODO: Create a function to write README file
inquirer.prompt(questions).then(function (response) {
    console.log(response);

    const content = generateMarkdown(response);
    console.log(content);
    fs.writeFile('./dist/testREADME.md', content, function (err) {
        if (err) throw err
        console.log('Your readme is generated!');
    });
});

