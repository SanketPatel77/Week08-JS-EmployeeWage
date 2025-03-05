const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
  console.log("Employee is absent !");
  return;
} else {
  console.log("Employee is present ! ");
}

// Calculate Daily Employee Wage based on part time or full time
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 10;
let totalEmpHrs = 0;
let totalWoringDays = 0;

function getWorkingHours(empCheck) {
  switch (empCheck) {
    case IS_PART_TIME:
      return PART_TIME_HOURS;

    case IS_FULL_TIME:
      return FULL_TIME_HOURS;
    default:
      return 0;
  }
}

let empHrs = 0;
// empCheck = Math.floor(Math.random() * 10) % 3;
// empHrs = getWorkingHours(empCheck);
// let empWage = empHrs * WAGE_PER_HOUR;
// console.log("Emp Wage : " + empWage);

//UC4
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
  let empCheck = Math.floor(Math.random() * 10) % 3;
  empHrs += getWorkingHours(empCheck);
}
// let empWage = empHrs * WAGE_PER_HOUR;
// console.log("Total Hrs : " + empHrs + " Emp wage : " + empWage);

//UC5
while (
  totalEmpHrs <= MAX_HRS_IN_MONTH &&
  totalWoringDays < NUM_OF_WORKING_DAYS
) {
  totalWoringDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  totalEmpHrs += getWorkingHours(empCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log(
  "UC5-Total Days : " +
    totalWoringDays +
    " Total Hrs : " +
    totalEmpHrs +
    " Emp wage : " +
    empWage
);
