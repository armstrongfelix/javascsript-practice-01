let fullName = "felix armstrong ezeudo";
let words = fullName.split(" ");
let names = "";
for (i of words) {
  i = i[0].toUpperCase() + i.slice(1).toLowerCase();
  names = `${names} ${i}`;
}

console.log(names);
