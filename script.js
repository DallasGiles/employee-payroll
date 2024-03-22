// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employee = { firstName: '', lastName:'', salary: 0};
// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = [ 'firstName', 'lastName', 0];
  const employee = { firstName: '', lastName:'', salary: 0};
  employee.firstName = prompt('What is the first name?');
  employee.lastName = prompt ('What is the last name?');
  employee.salary = prompt ('What is the salary?');
  employeesArray.push(employee);

  continueInput = prompt('Would you like to add another employee?');
 
  console.log(employeesArray);
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let total= 0;
  for (let i=0; i < employeesArray.length; i++){
    total+= employeesArray[i].salary
  }
  let avg = total / employeesArray.length;
  return avg
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  if (employeesArray.length === 0){
    return 'No employees recorded.';
  }
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  return employeesArray[randomIndex];
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    
    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}
    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = employee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });


const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);