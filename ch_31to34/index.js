var Name = prompt("enter name");

var DOBdate = prompt("enter date of your birth");
var DOBmonth = prompt("enter month of DOB in numbers");
var DOByear = prompt("enter year DOB");

console.log(`hello ${Name}! Good Morning`);

console.log(`Your DOB is ${DOBdate} / ${DOBmonth} / ${DOByear}`);

var date = new Date();
var ageinYear = date.getFullYear() - DOByear;
console.log(
  `You are ${ageinYear} years ${DOBmonth} months ${DOBdate} days ${date.getHours()} hours ${date.getMinutes()} minutes ${date.getSeconds()} seconds old `
);

var ageinDays = ageinYear * 365;

console.log(`you are ${ageinDays} days old`);

var birthDay = new Date(date.getFullYear(), DOBmonth - 1, DOBdate);
if (date.getTime() > birthDay.getTime()) {
  birthDay.setFullYear(birthDay.getFullYear() + 1);
}

var diff = birthDay.getTime() - date.getTime();
var hourLeft = Math.floor(diff / (1000 * 60));
var daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(daysLeft, hourLeft);

