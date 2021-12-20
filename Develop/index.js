// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Please Enter your Projects Title. (Required)",
      validate: (projectTitle) => {
        if (projectTitle) {
          return true;
        } else {
          console.log("Cannot leave as a blank value!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username. (Required)",
      validate: (githubName) => {
        if (githubName) {
          return true;
        } else {
          console.log("Cannot leave as a blank value!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "githubLink",
      message: "Enter a link to your GitHub. (Required)",
      validate: (githubLinkName) => {
        if (githubLinkName) {
          return true;
        } else {
          console.log("Cannot leave as a blank value!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter your Email Address. (Required)",
      validate: (userEmail) => {
        if (userEmail) {
          return true;
        } else {
          console.log("Cannot leave as a blank value!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contact",
      message: "Please provide details of how to reach you. (Required)",
      validate: (contactME) => {
        if (contactME) {
          return true;
        } else {
          console.log("Cannot leave as a blank value!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a detailed description of your project.",
    },
    {
      type: "input",
      name: "installation",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
    {
      type: "input",
      name: "usage",
      message:
        "Please provide examples and a detailed explanation of your apps usage.",
    },
    {
      type: "list",
      name: "license",
      message:
        "Please select a license (if needed) for your app from the following:",
      choices: [
        "The Apache License",
        "IBM License",
        "The MIT License",
        "GNU License",
        "N/A",
      ],
    },
    {
      type: "input",
      name: "contributing",
      message:
        "Provide details about project contribution. What are some guidelines?.",
    },
    {
      type: "input",
      name: "tests",
      message: "Provide some tests for your application and how to run them.",
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
async function init() {
  try {
    const data = await questions();
    const markdownString = await generateMarkdown(data);
    const isFileCreated = writeToFile("Readme.md", markdownString);

    if (isFileCreated) {
      console.log("File was successfully created!");
    }
  } catch (err) {
    console.log(err);
  }
}

// Function call to initialize app
init();
