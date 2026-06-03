console.log("Task 4 - Debugging");

var length = 8;
var width = 10;

var area = length * width;

var perimeter = 2 * length + 2 * width;

console.log("The area of a piece of paper with a length of " + length + " and a width of " + width + " is " + area);
console.log("The same piece of paper has a perimeter of " + perimeter);

if (area > perimeter){
    console.log("Yay, your area is larger, this is right for this example");
} else {
    console.log("Hmm, your perimeter is larger. It shouldn't be for this example");
}