/*
Exercise 18: Savings Calculator
Declare  weeklySavings = 2500  and  weeks = 12 .
Use a  for  loop to simulate saving money each week. Print the balance at the end of each
week.
Expected output:
Week 1: ₦2500
Week 2: ₦5000
Week 3: ₦7500
...
Week 12: ₦30000
*/
let weeklySavings = 2500;
let weeks = 12;
let balance = 0;
for (let i = 1; i <= weeks; i++) {
  balance += weeklySavings;
  console.log(`Week ${i}: ₦${balance}`);
}
