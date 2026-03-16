/*
Exercise 11: String Builder
Declare a variable  char = "*"  and  count = 6 .
Use a  for  loop to build a single string that repeats the character that many times, then
print it.
Expected output:
******
Then change  char  to  "-"  and  count  to  10  and run again.
*/

let char = "*";
let count = 6;
let output = "";

for (let i = 0; i <= count; i++) {
  output += char;
}
console.log(output);

count = 10;
output = "";
char = "-";
for (let i = 0; i <= count; i++) {
  output += char;
}
console.log(output);
