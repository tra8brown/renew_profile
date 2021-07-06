// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input //mananger
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
    { //TEAM MANAGER id
        type: 'input',
        name: 'managerId',
        message: 'What is the team managers Id?',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("You must enter a manager Id.");
            }
            return true;
        },
    },
    { // team manager eamil
        type: 'input',
        name: 'managerEmail',
        message: 'What is the managers email?',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("You must enter a manager's email.");
            }
            return true;
        },
    },
    { //team manager phone
        type: 'input',
        name: 'managerPhone',
        message: 'What is the managers phone.',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("You must enter team manager's phone.");
            }
            return true;
        },
    },
    { //INTERN
        type: 'input',
        name: 'internName',
        message: 'What is the intern name?',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("you must enter the name of the intern.");
            }
            return true;
        }
    },
    { //intern id
        type: 'input',
        name: 'internId',
        message: 'What is the interns Id?',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("You must enter intern Id.");
            }
            return true;
        },
    },
    { //intern email
        type: 'input',
        name: 'internEmail',
        message: 'What is the interns email?',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("You must enter interns email.");
            }
            return true;
        },
    },
    { //intern school
        type: 'input',
        name: 'internSchool',
        message: 'What is the interns school.',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("You must enter team manager's phone.");
            }
            return true;
        },
    },
    { //ENGINEER name
        type: 'input',
        name: 'engineerName',
        message: 'What is the team engineers name?',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("you must enter the name of the team engineer.");
            }
            return true;
        }
    },
    { //engineer id
        type: 'input',
        name: 'engineerId',
        message: 'What is the team engineers Id?',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("You must enter a engineer Id.");
            }
            return true;
        },
    },
    { //engineer email
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the engineers email?',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("You must enter a engineer's email.");
            }
            return true;
        },
    },
    { //engineer github
        type: 'input',
        name: 'engineerGithub',
        message: 'What is engineers Github username?',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("You must enter engineers Github username.");
            }
            return true;
        },
    }
];


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