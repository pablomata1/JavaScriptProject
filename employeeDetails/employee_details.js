const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      //... More employee records can be added here
];

 // Function to display all employees
function displayEmployees(){
    const totalEmployees = employees.map((employee, index) => 
    `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');

    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

  
//Calculates employee's total salary
//The reduce method iterates through each employee and accumulates their salaries to calculate the total. 
//The initial value of the accumulator (acc) is 0.
//The reduce method continuously accumulates these salaries by adding each employee's salary to the previous total.
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}


//Display all employees from HR derpartment
//The above code filters the employees array using the filter array method, 
//isolating and collecting employees whose department property matches 'HR' into a new array named hrEmployees.
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => 
    `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
   
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

//Displays employee details based on ID
//This code uses the find method to locate an employee in the employees array whose ID matches the provided employee ID, storing the found employee object in the foundEmployee variable.
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

    }
}