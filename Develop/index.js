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
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is the title of this project?',
      name: 'title',
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
        name: 'BSD',
        when: (answers) => answers.license === 'BSD',
    },
    {
        type: 'rawlist',
        message: 'Which version of Creative Commons license?',
        choices: ['CC0', 'Attribution 4.0 International', 'Attribution-ShareAlike 4.0 International', 'Attribution-NonCommercial 4.0 International', 'Attribution-NoDerivates 4.0 International', 'Attribution-NonCommmercial-ShareAlike 4.0 International', 'Attribution-NonCommercial-NoDerivatives 4.0 International'],
        name: 'creativeCommons',
        when: (answers) => answers.license === 'Creative Commons',
    },
    {
        type: 'rawlist',
        message: 'Which version of the GNU license?',
        choices: ['GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3'],
        name: 'GNU',
        when: (answers) => answers.license === 'GNU',
    },
    {
        type: 'rawlist',
        message: 'Which version of the Hippocratic license?',
        choices: ['The Hippocratic License 3.0', 'The Hippocratic License 2.1'],
        name: "hippocratic",
        when: (answers) => answers.license === 'The Hippocratic License',
    },
    {
        type: 'rawlist',
        message: 'Which Open Data Commons license?',
        choices: ['Attribution License', 'Open Database License', 'Public Domain Dedication and License'],
        name: 'openDataCommons',
        when: (answers) => answers.license === 'Open Data Commons',
    },
    {
        type: 'rawlist',
        message: 'Which version of the Perl license?',
        choices: ['The Perl License', 'The Artistic License 2.0'],
        name: 'perl',
        when: (answers) => answers.license === 'Perl',
    },
    {
      type: 'input',
      message: 'How would you describe this project?',
      name: 'description',
    },
    {
      type:'input',
      message: 'How do you use this project?',
      name:'usage',
    },
    {
      type: 'input',
      message: 'How do you install this project?',
      name: 'installation',
    },
    {
    type: 'input',
    message: 'How do you test this project?',
    name: 'test',
    },
    {
      type: 'input',
      message: 'How could someone contribute to this project?',
      name: 'contribution',
    },
  ]

inquirer
  .prompt(questions)

  .then((response) =>
    writeToFile('README.md', response)
  );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  switch (data.license) {
    case 'GNU':
      data.license = data.GNU;
      break;
    
    case 'BSD':
      data.license = data.BSD;
      break;
    
    case 'creativeCommons':
      data.license = data.creativeCommons;
      break;

    case 'hippocratic':
      data.license = data.hippocratic;
      break;

    case 'openDataCommons':
      data.license = data.openDataCommons;
      break;

    case 'perl':
      data.license = data.perl;
      break;
  }


  content = `# ${data.title}

## Table of Contents
* [Description](#description)
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [License Information](#license-information)

### Description
${data.description}

### Installation Instructions
${data.installation}

### Usage Information
${data.usage}

###  Contribution Guidelines
${data.contribution}

### Test Instructions
${data.test}

### License Information
${data.license}

### Questions?
Contact me at ${data.email} or visit my GitHub at [https://github.com/${data.username}](https://github.com/${data.username})
`

  fs.writeFile(`./${fileName}`,content, err => {
    if (err) {
      console.error(err)
    }
  })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
