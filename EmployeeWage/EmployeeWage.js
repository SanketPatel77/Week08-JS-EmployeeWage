const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = [];
let empDailyWageMap = new Map();

// Function to get working hours
const getWorkingHours = (empCheck) => {
  switch (empCheck) {
    case IS_PART_TIME:
      return PART_TIME_HOURS;
    case IS_FULL_TIME:
      return FULL_TIME_HOURS;
    default:
      return 0;
  }
};

// Function to calculate daily wage
const calcDailyWage = (empHrs) => empHrs * WAGE_PER_HOUR;

// Compute Employee Wage
while (
  totalEmpHrs < MAX_HRS_IN_MONTH &&
  totalWorkingDays < NUM_OF_WORKING_DAYS
) {
  totalWorkingDays++;
  let empCheck = Math.floor(Math.random() * 10) % 3;
  let empHrs = getWorkingHours(empCheck);

  if (totalEmpHrs + empHrs > MAX_HRS_IN_MONTH) break; // Prevent exceeding max hours

  totalEmpHrs += empHrs;
  let dailyWage = calcDailyWage(empHrs);
  empDailyWageArr.push(dailyWage);
  empDailyWageMap.set(totalWorkingDays, dailyWage);
}

//Calculate total wage using reduce**
const totalWage = empDailyWageArr.reduce((acc, wage) => acc + wage, 0);
console.log(`Total Employee Wage: ${totalWage}`);

//Show Day along with Daily Wage using Map**
console.log("Day-wise Wage:");
empDailyWageMap.forEach((wage, day) =>
  console.log(`Day ${day}: Wage = ${wage}`)
);

//Show Days when Full Time Wage of 160 was earned**
const fullTimeDays = [...empDailyWageMap]
  .filter(([day, wage]) => wage === FULL_TIME_HOURS * WAGE_PER_HOUR)
  .map(([day, wage]) => day);
console.log("Days with Full Time Wage:", fullTimeDays);

// Find the first occurrence when Full Time Wage was earned**
const firstFullTimeDay =
  fullTimeDays.length > 0 ? fullTimeDays[0] : "Never Earned Full Wage";
console.log("First Full Time Wage Earned on Day:", firstFullTimeDay);

//  Check if every element of Full Time Wage is truly holding Full Time Wage**
const isAllFullTimeWage = fullTimeDays.every(
  (day) => empDailyWageMap.get(day) === 160
);
console.log("Is Every Full Time Wage Entry Actually 160?", isAllFullTimeWage);

//  Check if there is any Part Time Wage**
const hasPartTimeWage = [...empDailyWageMap.values()].some(
  (wage) => wage === PART_TIME_HOURS * WAGE_PER_HOUR
);
console.log("Is there any Part Time Wage?", hasPartTimeWage);

//  Find the number of days the Employee Worked**
const daysWorked = empDailyWageArr.filter((wage) => wage > 0).length;
console.log("Number of Days Employee Worked:", daysWorked);
