/*
Exercise 19: Character Counter
Declare a variable  sentence = "I love learning JavaScript" .
Use a  for  loop to go through each character in the sentence and count how many times
the letter  "a"  appears (case-insensitive).
Print the result.
Expected output:
The letter "a" appears 3 times.
*/

let sentence = "I love learning JavaScript";
let count = 0;
for (i of sentence.split("")) {
  if (i.toLowerCase() == "a") {
    count++;
  }
}
console.log(`The letter "a" appears ${count} times.`);
