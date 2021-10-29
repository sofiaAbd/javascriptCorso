
let data = new Date();

console.log(data.getDay());
console.log(data.getFullYear());
console.log(data.getHours());
console.log(data.getMonth());
console.log(data.getMinutes());

data.setFullYear(2021,11,31);
console.log(data);

let date = new Date("March 09, 2021 18:00:00");
date.setDate(date.getDate()+5);

console.log(date);