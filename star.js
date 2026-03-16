/*
Exercise 17: Star Row Printer
Declare a variable  rows = 5 .
Use a  for  loop to print a row of stars on each line, where every row has the same number
of stars equal to  rows .
Expected output (rows = 5):
*****
*****
*****
*****
*****
Then change  rows  to  3  and run again.
*/

let rows = 3;
for (let i = 0; i < rows; i++) {
  let star = "";
  for (let j = 0; j < rows; j++) {
    star += "*";
  }
  console.log(star);
}
