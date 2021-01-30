const courses = [];

for (let index = 0; index < 5; index++) {
  var c = prompt("enter course");
  courses.push(c);
}
console.log(courses);
alert(courses);

for (let index = 0; index < 5; index++) {
  var c = prompt(`course${index}`, courses[index]);
  courses[index] = c;
}
console.log(courses);
