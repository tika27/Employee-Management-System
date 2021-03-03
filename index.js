const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 8889,
  user: "root",
  password: "root",
  database: "burg_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  start();
});

function start() {
  inquirer.prompt({
      message: "what would you like to view?",
      type: "list",
      choices: [
          "view all departments",
          "add employee",
          "add role",
          "update employee role",
          "End"
      ],
      name: "choice"
  }).then(answers => {
      console.log(answers.choice);
      switch (answers.choice) {
          case "view all departments":
              viewDepartments()
              break;

          case "add employee":
              addEmployee()
              break;

          case "add department":
              addDepartment()
              break;

          case "add role":
              addRole()
              break;

          case "update employee role":
              updateEmployeeRole();
              break;

          default:
              connection.end()
              break;
      }
  })
}


function viewDepartments() {
  connection.query("SELECT * FROM department", function (err, data) {
      console.table(data);
      start();
  })
}

function addEmployee() {
  inquirer.prompt([{
          type: "input",
          name: "firstName",
          message: "What is the first name of the employees?"
      },
      {
          type: "input",
          name: "lastName",
          message: "What is the last name of the employees?"
      },
      {
          type: "number",
          name: "roleId",
          message: "What is the role ID of the employees?"
      },
      {
          type: "number",
          name: "managerId",
          message: "What is the employees manager's ID?"
      }
  ]).then(function(res) {
      connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], function(err, data) {
          if (err) throw err;
          console.table("Successfully Inserted");
          start();
      })
  })
}

function addDepartment() {
  inquirer.prompt([{
      type: "input",
      name: "department",
      message: "What is the department that you want to add?"
  }, ]).then(function(res) {
      connection.query('INSERT INTO department (name) VALUES (?)', [res.department], function(err, data) {
          if (err) throw err;
          console.table("Successfully Inserted");
          start();
      })
  })
}

function addRole() {
  inquirer.prompt([
      {
          message: "Please enter the title role:",
          type: "input",
          name: "title"
      }, {
          message: "Please enter the salary:",
          type: "number",
          name: "salary"
      }, {
          message: "Please enter department ID:",
          type: "number",
          name: "department_id"
      }
  ]).then(function (response) {
    console.log("Adding new role")
      connection.query("INSERT INTO role (title, salary, department_id) values (?, ?, ?)", 
      [response.title, response.salary, response.department_id], function (err, data) {
          console.table(data);
      })
      start();
  })

}

function updateEmployeeRole() {
  inquirer.prompt([
      {
          message: "which employee would you like to update?",
          type: "input",
          name: "name"
      }, {
          message: "Please enter the new role ID:",
          type: "number",
          name: "role_id"
      }
  ]).then(function (response) {
      connection.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [response.role_id, response.name], function (err, data) {
          console.table(data);
      })
      start();
  })

}



// const viewDepartment = () => {
//   inquirer.prompt(
//     {
//       type: "list",
//       message: "What would you like to do?",
//       choices: [
//         "View all Department",
//         "Add Department",
//         "Remove Department",
//         "End",
//         "Go BACK" ],
//       name: "departmentChoices"
    
//     }).then(Chooses => {
//       //we need to build functionality based on user choice
//       switch (choice.departmentChoices) {
//         case "View all Departments":
//           rDepartments();
//           break;

//         case "Add Department":
//           addDepartment();
//           break;

//         case "Remove Department":
//           removeDepartment();
//           break;

//         case "End":
//           connection.end()
//           break;
    
//           default:
//           askQuestions()
//       }
//     });

// }







