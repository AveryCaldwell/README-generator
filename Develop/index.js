// TODO: Include packages needed for this application
const fs = require('fs');
const prompt = require('prompt');
// const rl = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// TODO: Create an array of questions for user input
const questions = [
  'What is your title?: ',
  'What is the description of the project?: ',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const writeDoc = (result) => {
  let documentTemplate = `
# __${result.title}__

## __Description__
 ${result.description}
 
<br>
<hr>
<br> 

## __Table of contents__

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

<br>
<hr>
<br>


### __Installation__
Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services.

Get a free API Key at https://example.com
Clone the repo
git clone https://github.com/your_username_/Project-Name.git
Install NPM packages
npm install
Enter your API in config.js
const API_KEY = 'ENTER YOUR API';

<br>
<hr>
<br>

### __Usage__
Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

For more examples, please refer to the Documentation

<br>
<hr>
<br>

### __License__
Distributed under the MIT License. See LICENSE.txt for more information.
TODO: (THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
)

<br>
<hr>
<br>

### __Contributing__
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request

<br>
<hr>
<br>


### __Tests__
### Test instructions
<br>
<hr>
<br>

### __Questions__

(WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile)
- GitHub - [yourusername](https://github.com/yourusername)
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
- Email - [Add your email here](https://www.your-site.com)
<br>
<hr>
<br>

`;

  writeToFile('./testREADME.md', documentTemplate);
};

prompt.start();
let schema = {
  properties: {
    title: {
      //   pattern: /^[a-zA-Z\s]+$/,
      description: questions[0],
      required: true,
    },
    description: {
      description: questions[1],
      required: true,
    },
  },
};
prompt.get(schema, (err, result) => {
  console.log(result);
  writeDoc(result);
});
