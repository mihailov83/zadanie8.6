// scripts.js

var a = 4,
    b = 2,
    value = (a * a) - (2 * a * b) - (b * b);


if (value < 0) {
    console.log("The value is below zero");
    alert("The value is below 0");
} else if (value > 0) {
    console.log("The value is above 0");
    alert("The value is above 0");
} else if (value == 0) {
    console.log("The value is 0");
    alert("The value is 0");
} else {
    console.log("This is an unknown value");
    alert("This is an unknown value")
}
