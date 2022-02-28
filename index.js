// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'Project Title',
    },
    {
        type:'input',
        name:'description',
        message:'Project Description',
        
    },
    {
        type:'input',
        name:'github',
        message:'Github Username',
    },
    {
        type:'input',
        name:'email',
        message:'Email Address',
    },
    {
        type:'input',
        name:'installation',
        message:'Installation steps',
    },
    {
        type:'input',
        name:'benefits',
        message:'Benefits',
    },
    {
        type:'list',
        name:'licenses',
        message:'Choose License',
        choices:['MIT License', "APACHE 2.0", "None"]
    },
    {
       type:'input',
       name:'contributions',
       message:'Collaborators?',
    },
    {
      type:'input',
      name:'test',
      message:'Testing steps',
   },
]


// TODO: Create a function to initialize app
function init() {
    inq.prompt(questions).then((data) => {
        console.log(data)
    fs.writeFile('Output/README.md', generateMarkdown(data),(err) => err? console.error(err) : console.log("Success!"))})
 };


// Function call to initialize app
init();
