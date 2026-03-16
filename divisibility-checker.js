/*

Exercise 13: Divisibility Checker
Declare a variable  num = 60 . Write conditions to check and print:
Whether it is divisible by 2
Whether it is divisible by 3
Whether it is divisible by 5
Whether it is divisible by all three
Expected output (example):
Divisible by 2: true
Divisible by 3: true
Divisible by 5: true
Divisible by 2, 3, and 5: true
*/

let num = 60;
if (num % 2 == 0) {
  console.log("Divisible by 2: true");
}

if (num % 3 == 0) {
  console.log("Divisible by 3: true");
}

if (num % 5 == 0) {
  console.log("Divisible by 5: true");
}

if (num % 2 == 0 && num % 3 == 0 && num % 5 == 0) {
  console.log("Divisible by 2, 3, and 5: true");
}
