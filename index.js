// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{ //name of project 
        type: 'input',
        name: 'managerName',
        message: 'What is the team managers name?',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("you must enter the name of the team manager.");
            }
            return true;
        }
    },
    { //Description of title for the section
        type: 'input',
        name: 'managerId',
        message: 'What is the managers Id.',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("You must enter a managerId.");
            }
            return true;
        },
    },
    { //Description of title for the section
        type: 'input',
        name: 'managerEmail',
        message: 'What is the managers email.',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("You must enter a manager email.");
            }
            return true;
        },
    },
    { //Description of title for the section
        type: 'input',
        name: 'managerPhone',
        message: 'What is the managers phone.',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("You must enter a manager phone.");
            }
            return true;
        },
    }
];

// Where the app starts running
// Where we start calling function
inquirer.prompt(questions).then(function(data) {
    const filename =
        `generated.index.html`;

    console.log(data);

    var readme = generateHTML(data);
    console.log(readme);

    fs.writeFile(filename, readme, function(err) {
        if (err) {
            return console.log(err);
        }

        console.log('Your team profile page has been created!');
    });
});