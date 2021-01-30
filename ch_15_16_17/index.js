const courses = [];

for (let index = 0; index < 5; index++) {
  var c = prompt("enter course");
  courses.push(c);
}
console.log(courses);
alert(courses);

var c1 = prompt("course1", courses[0]);
courses[0] = c1;

var c2 = prompt("course1", courses[1]);
courses[1] = c2;

var c3 = prompt("course1", courses[2]);
courses[2] = c3;

var c4 = prompt("course1", courses[3]);
courses[3] = c4;

var c5 = prompt("course1", courses[4]);
courses[4] = c5;

console.log(courses);
alert(courses);
