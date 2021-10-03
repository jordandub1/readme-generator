// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require("inquirer/lib/objects/choices");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const userInput = [
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project to include why you created the project, what problem(s) did it solve, and what you learned while creating it:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:',
      },
      {
        type: 'list',
        message: 'Please choose a license for your project:',
        name: 'license',
        choices: ['None', 'Apache 2.0', 'MIT', 'BSD 3', 'ISC', 'GPL 3.0'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
  err ? console.log(err) : console.log("Success");
  });
};

// TODO: Create a function to initialize app
function init() {
  const output = './output';
  if((fs.existsSync(output)) !== true) {
      fs.mkdirSync(output);
  }
  questions().then(data => {
      writeToFile(output + "/README.md", generateMarkdown(data));
  })
};

function questions() {
  return inquirer.prompt(userInput);
};

// Function call to initialize app
init();