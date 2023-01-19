// TODO: Include packages needed for this application
// external packages
const fs = require('fs');
// const prompt = require('prompt');
// const util = require('util');

//internal packages
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// Array of questions for user input
const questions = [
  {
    name: 'title',
    message: 'What is your title?',
    type: 'input',
  },
  {
    name: 'description',
    message: 'What is the description of the project?',
    type: 'input',
  },
  {
    name: 'installation',
    message: 'What are the installation instructions?',
    type: 'input',
  },
  {
    name: 'usage',
    message: 'Provide instructions and examples of your project in use',
    type: 'input',
  },
  {
    name: 'license',
    message: 'Which license was used? If license is not listed, select "None"',
    type: 'list',
    choices: ['MIT', 'Apache', 'Boost', 'IBM', 'ISC', 'Mozilla', 'None'],
  },
  {
    name: 'contribution',
    message:
      'Provide guidelines on how other developers can contribute to your project',
    type: 'input',
  },
  {
    name: 'tests',
    message: 'What are the test instructions?',
    type: 'input',
  },
  {
    name: 'github',
    message: 'What is your GitHub username?',
    type: 'input',
  },
  {
    name: 'email',
    message: 'What is your email?',
    type: 'input',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

// Function that pulls user input and inserts it into the readme
const writeDoc = (documentTemplate) => {
  writeToFile('./README.md', documentTemplate);
};

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      const documentTemplate = markdown(answers);
      writeDoc(documentTemplate);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log(error);
      } else {
        console.log(error);
      }
    });
}

// Function call to initialize app
init();
