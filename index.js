const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engingeer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template")

teamArray = [];



function runApp () {

  function createTeam () {
    inquirer.prompt([{
      type: "list",
      message: "Who would you like to add to your team?",
      name: "addEmployeePrompt",
      choices: ["Manager", "Engineer", "Intern", "No more employees can be added to your team."]
    }]).then(function (userInput) {
      switch(userInput.addEmployeePrompt) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          htmlBuilder();
      }
    })
  }


function addManager() {
  inquirer.prompt ([
    
    {
      type: "input",
      name: "managerName",
      message: "Who is your manager?"
    },

    {
      type: "input",
      name: "managerId",
      message: "What is the manger ID number?"
    },

    {
      type: "input",
      name: "managerEmail",
      message: "Please provide the manger email adress?"
    },

    {
      type: "input",
      name: "mangerEmail",
      message: "What office number is the manger in?"
    }

  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArray.push(manager);
    createTeam();
  });

}


function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "Name an engineer."
      },

      {
        type: "input",
        name: "engineerId",
        message: "Provide an engineer ID number." 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "Provide an engineer email address?"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "Name an engineer Github account name?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });

  }

  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "Who is the intern for the team?"
      },

      {
        type: "input",
        name: "internId",
        message: "Does the intern have a ID number? If so please provide it.?" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "Provide the intern's email adress.?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school did the intern graduate from??"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });

  }


function htmlBuilder () {
    console.log("Team created!")

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

}

createTeam();

}

runApp();