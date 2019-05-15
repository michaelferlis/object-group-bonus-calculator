const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

for (let i = 0; i < employees.length; i++) {
  employeeName(employees[i]);
}

function employeeName(person) {
  console.log(person.name);
}

for (let i = 0; i < employees.length; i++) {
  numberPerson(employees[i]);
}

function numberPerson(person) {

  console.log(person.employeeNumber);
}

for (let i = 0; i < employees.length; i++) {
  cashMoney(employees[i]);
}

function cashMoney(person) {

  console.log(person.annualSalary);
}

for (let i = 0; i < employees.length; i++) {
  goodEnough(employees[i]);
}

function goodEnough(person) {

  console.log(person.reviewRating);
}

function bonusPercentageCalculator(employeeRating, employeeNumber, employeeSalary){
const employeeBonus;
if (employeeRating <= 2) {
  return; employeeBonus = 0;
}
else if (employeeRating = 3) {
  return; employeeBonus = 0.04;
  
}
else if (employeeRating = 4) {
  return; employeeBonus = 0.06;
}

else if (employeeRating = 5) {
  return employeeBonus = 0.10
  
}
} // end bonusPercentageCalculator


// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);