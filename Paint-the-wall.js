/*No arguments
Let's create a function that can paint walls.

1.create a new JavaScript file
2.first just check if you can run it with node
3.think of a good clear name for your function first
4.to paint a wall print something like "The wall has been painted red" to the console
5.first write a function that always paints the wall red (so no argument yet)
6.call the function to check if it works
*/

//const paint_wall = function () {
//    console.log("Paint the wall red");
//}
//paint_wall();

/*Single argument

1.now add an argument to the function
2.think of a good name for the argument
3.change the function so it uses the argument when it runs
4.if the function gets the string "green" it should print "The wall has been painted green"
5.call the function to check if it works, be sure to pass an argument when you call the function
6.call the function a second time, now pass in another color
7.what happens if we call the function without an argument?
*/
//const paint_wall = function (paintColor) {
//    console.log("The wall has been painted " + paintColor);
//}
//paint_wall("blue");
console.log("7. The outcome only shows: The wall has been painted");

/*Multiple arguments

Let's add another argument. We now want to choose the wall that we want to paint.

1.the new function should output something like "The north wall has been painted orange" or "The south-east wall has been painted grey"
2.think of a good name for this new argument
3.change the function so it takes two arguments
4.change the function so it uses both arguments
5.call the function to see if it works
6.does the order of the arguments matter when calling the function?
7.what happens if you switch them in the function definition?
8.what happens if you change the order of the arguments in the function definition and when calling the function?
*/
const paint_wall = function (paintColor, wallSide) {
    console.log("The wall has been painted " + paintColor);
    console.log("The " + wallSide + " wall has been painted " + paintColor)
}
const wallSide = "north";
const paintColor = "red";
paint_wall(paintColor, wallSide);
console.log("6. yes the order of the arguments does matter.");
console.log("7. I'll get a red collored wall witch is painted north");
console.log("8. The arguments will switch");
