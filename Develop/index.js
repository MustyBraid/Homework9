// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
licenses = ['Apache 2.0', 'Boost', 'BSD', 'Creative Commons', 'Eclipse Public License 1.0', 'GNU', 'The Hippocratic License', 'IBM Public License v1.0', 'ISC License', 'The MIT License', 'Mozilla Public License 2.0', 'Open Data Commons', 'Perl', 'SIL', 'The Unlicense', 'WTFPL', 'Zlib']
questions = [
    {
      type: 'input',
      message: 'What is your Github username',
      name: 'username',
    },
    {
      type: 'rawlist',
      message: 'What license is this project under?',
      name: 'license',
      choices: licenses,
    },
    {
        type: 'rawlist',
        message: 'Which version of the BSD license?',
        choices: ['BSD 2 clause', 'BSD 3 clause'],
        when: (answers) => answers.license === 'BSD',
        name:
    },
    {
        type: 'rawlist',
        message: 'Which version of Creative Commons license?',
        choices: ['CC0', 'Attribution 4.0 International', 'Attribution-ShareAlike 4.0 International', 'Attribution-NonCommercial 4.0 International', 'Attribution-NoDerivates 4.0 International', 'Attribution-NonCommmercial-ShareAlike 4.0 International', 'Attribution-NonCommercial-NoDerivatives 4.0 International'],
        when: (answers) => answers.license === 'Creative Commons',
    },
    {
        type: 'rawlist',
        message: 'Which version of the GNU license?',
        choices: ['GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3'],
        when: (answers) => answers.license === 'GNU',
    },
    {
        type: 'rawlist',
        message: 'Which version of the Hippocratic license?',
        choices: ['The Hippocratic License 3.0', 'The Hippocratic License 2.1'],
        when: (answers) => answers.license === 'The Hippocratic License',
    },
    {
        type: 'rawlist',
        message: 'Which Open Data Commons license?',
        choices: ['Attribution License', 'Open Database License', 'Public Domain Dedication and License'],
        when: (answers) => answers.license === 'Open Data Commons',
    },
    {
        type: 'rawlist',
        message: 'Which version of the Perl license?',
        choices: ['The Perl License', 'The Artistic License 2.0'],
        when: (answers) => answers.license === 'Perl',
    },
    {
      type: 'input',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ]

inquirer
  .prompt(questions)

  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
