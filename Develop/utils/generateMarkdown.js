// License object
const license = {
  apache: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
  boost: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
  IBM: 'https://img.shields.io/badge/License-IPL_1.0-blue.svg',
  ISC: 'https://img.shields.io/badge/License-ISC-blue.svg',
  MIT: 'https://img.shields.io/badge/License-MIT-yellow.svg',
  modzilla: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
  publicDomain: 'https://img.shields.io/badge/License-PDDL-brightgreen.svg',
};

const renderLicenseBadge;
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
if (license === MIT) {
  return MIT;
} else if (license === license.apache) {
  return apache;
} else if (license === license.boost) {
  return boost;
} else if (license === license.IBM) {
  return IBM;
} else if (license === license.ISC) {
  return ISC;
} else if (license === license.modzilla) {
  return modzilla;
} else if (license === license.publicDomain) {
  return publicDomain;
} else if (license === '') {
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
else function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
