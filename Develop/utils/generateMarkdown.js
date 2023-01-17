// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = {
    apache: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    boost: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
    IBM: 'https://img.shields.io/badge/License-IPL_1.0-blue.svg',
    ISC: 'https://img.shields.io/badge/License-ISC-blue.svg',
    MIT: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    mozilla: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
    // None: ' ',
  };
  if (answer === questions(license.choices)) {
    return ' ';
  } else {
    return licenseBadge[license];
  }
}

//validates license from a list of potential accepted licenses
function validateLicense(license) {
  let licenseValidated;
  switch (license.toLowerCase()) {
    case 'mit':
      licenseValidated = 'MIT';
      break;
    case 'apache':
      licenseValidated = 'apache';
      break;
    case 'boost':
      licenseValidated = 'boost';
      break;
    case 'ibm':
      licenseValidated = 'IBM';
      break;
    case 'isc':
      licenseValidated = 'ISC';
      break;
    case 'mozilla':
      licenseValidated = 'mozilla';
      break;
      // case ' ':
      // licenseValidated = 'none';
      break;
    default:
      licenseValidated = '';
      break;
  }
  return licenseValidated;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    apache: 'https://opensource.org/licenses/Apache-2.0',
    boost: 'https://www.boost.org/LICENSE_1_0.txt',
    ISC: 'https://opensource.org/licenses/ISC',
    MIT: 'https://opensource.org/licenses/MIT',
    mozilla: 'https://opensource.org/licenses/MPL-2.0',
  };
  return licenseLink[license];
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  license = validateLicense(license);
  return license === ''
    ? ''
    : `[![License: ${license}](${renderLicenseBadge(
        license
      )})](${renderLicenseLink(license)})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# __${data.title}__

${renderLicenseSection(data.license)} 

## __Description__


### __${data.description}__
 

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
${data.installation}


<br>
<hr>
<br>

### __Usage__
${data.usage}

<br>
<hr>
<br>

### __License__
The license the application is covered under: ${
    data.license
  } ${renderLicenseSection(data.license)} 

<br>
<hr>
<br>

### __Contributing__
Contributions are what make the open source community such an amazing place to learn, inspire, and create. When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

${data.contributing}


<br>
<hr>
<br>


### __Tests__
${data.tests}

<br>
<hr>
<br>

### __Questions__

  For any questions, please contact me with the information below:

- GitHub - [${data.username}](https://github.com/${data.username})
- Email - [${data.email}](${data.email})

<br>
<hr>
<br>

`;
}

module.exports = generateMarkdown;
