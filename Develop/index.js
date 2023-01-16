// TODO: Include packages needed for this application
// Packages
const fs = require('fs');
const prompt = require('prompt');
const markdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// Array of questions for user input
const questions = [
  'What is your title?', //0
  'What is the description of the project?', //1
  'What are the installation instructions?', //2
  'What are examples of how the project can be used? (Screenshots, code examples, demos, and links)', //3
  'What license was used?', //4
  'What are the test instructions?', //5
  'What is your GitHub username?', //6
  'What is your email?', //7
  'How can you be reached with additional questions?', //8
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

// object of contentsf

let schema = {
  properties: {
    title: {
      //   pattern: /^[a-zA-Z\s]+$/, If case checking is required, this is how to add a regex pattern to check the input
      description: questions[0],
      required: true,
    },
    description: {
      description: questions[1],
      required: true,
    },
    installation: {
      description: questions[2],
      required: true,
    },
    usage: {
      description: questions[3],
      required: true,
    },
    license: {
      description: questions[4],
      required: true,
    },
    tests: {
      description: questions[5],
      required: true,
    },
    username: {
      description: questions[6],
      required: true,
    },
    email: {
      description: questions[7],
      required: true,
    },
  },
};
// TODO: Create a function to initialize app
function init() {
  prompt.start();
  prompt.get(schema, (err, result) => {
    const documentTemplate = markdown(result);
    writeDoc(documentTemplate);
  });
}

// Function call to initialize app
init();
