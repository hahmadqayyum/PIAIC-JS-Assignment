var num = Matn.ceil(prompt("enter decimal num", 3.4));
console.log(num);

var text = "This is my dummy text";

var sliceText = text.slice(0, 4);
var reverseText = "";
for (let index = sliceText.length; index >= 0; index--) {
  reverseText = reverseText + sliceText[index];
}
console.log(reverseText);
alert(reverseText);
