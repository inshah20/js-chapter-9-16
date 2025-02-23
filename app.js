// USER INPUT & CONDITIONAL STATEMENT
// Chapter 9-11

//Qno:1 Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
// ans;
// let cityName = prompt("enter your city name");
// let city = "karachi";
// if (city == cityName){
//     alert("welcome to the city of lights")
// }

// else{
//     alert("You doesn't belong to city of lights")
// }

//Qno:2 Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
// ans;
// let gender = prompt("enter your gender");
// let gen1 = "male";
// if(gen1 == gender){
//     alert("Good morning sir");
// }
// else{
//     alert("Good morning ma'am")
// }

// Qno:3 Write a program to take input color of road traffic signal
// from the user & show the message according to this table
// ans;
// let trafficSignal = prompt("enter the color");
// let color1 = "red";
// let color2 = "green";
// if (trafficSignal != color2) {
//     if (color1 == trafficSignal) {
//         alert("must stop");
//     }
//     else {
//         alert("ready to move");
//     }
// }
// else {
// alert("Move now")
// }

//Qno:4 Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
// ans;
// let fuel = +prompt("enter the quantity of fuel")
// if(fuel < 0.25){
// alert("Please refill the fuel in your car")
// }
// else{
// alert("You don't need to refill the fuel")
// }

//Qno :5 Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

//part:A
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// part:B
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

//Part:C
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

//part:D
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }

//part :E
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// part:F
//  if("car" < "cat"){
//  alert("car is smaller than cat");
//  }

// Qno:6 Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:


// let marksObtainedEnglish = +prompt("enter your marks in english");
// let marksObtainedUrdu = +prompt("enter your marks in Urdu");
// let marksObtainedMath = +prompt("enter your marks in Maths");
// let remarks;
// let grade;

// let totalMarks = 300;
// let totalMarksEach = 100;
// let marksObtainedtotal = marksObtainedEnglish + marksObtainedMath + marksObtainedUrdu;
// let percentage = (marksObtainedtotal) *100 / totalMarks


// document.write("<h1>"+"Mark Sheet"+ "</h1>"+"<br />")
// document.write("total marks:" + totalMarks + "<br />")
// document.write("Marks obtained is: " + (marksObtainedEnglish+ marksObtainedMath + marksObtainedUrdu)+ "<br />")



// if(percentage >= 80){
//     grade = "A+ Grade"
//     remarks = "excellent"

// }

// else if(percentage >= 60){
//     grade = "B Grade"
//     remarks = "You need to improve"

// }

// else if(percentage >= 70){
//    grade = "A Grade"
//    remarks = "Good"
// }

// else if(percentage >= 40){
//     grade = "Fail"
//     remarks = "focus on your srtudies"
// }


// document.write("grade: " +  grade )
// document.write("<br />")
// document.write("remarks: " + remarks) 

//Qno:7 Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// If user guesses the same number, show “Bingo! Correct answer”.
// If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
// ans;
// let secretNum = 8;
// let userNum = +prompt("guess the number between 1-10" );

// if(userNum === 8){
//     alert("“Bingo! Correct answer”");
// }

// else if (++userNum === secretNum){
//     alert("“Close enough to the correct answer”");
// }

// else{
//       alert("you guess it wrong");
// }

//Qno: 88. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

//ans;
// let num = +prompt("enter to check the number i.e; divisible by 3.")

// if (num % 3 ===0){
//     alert("this number is divisible by 3.");
// }

// else{
//     alert("this number is not divisible by 3.")
// }

//Qno:9  Write a program that checks whether the given input is an
// even number or an odd number.

// let num = +prompt("enter the number to check that is even or odd.");

// if(num % 2 ===0){
//     alert("this number is even");
// }

// else{
//       alert("this number is odd.");
// }

//Qno:10 Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

//ans;
// let climateCheck = + prompt("enter the temperature");

// if(climateCheck > 40){
//     alert("“It is too hot outside.”");
// }

// else if(climateCheck > 30){
//     alert("“The Weather today is Normal.”");
// }

// else if (climateCheck > 20){
//     alert("“Today’s Weather is cool.”");
// }

// else if (climateCheck > 10){
//     alert("“OMG! Today’s weather is so Cool.”");
// }

//Qno: 11 Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// let num1 = +prompt("enter your first number");
// let num2 = +prompt("enter your second number");
// let opreator = prompt("enter the opreator too");

// if (opreator === "+"){
//     alert(num1 + num2);
// }
// else if(opreator === "-"){
//     alert(num1 - num2);
// }

// else if(opreator === "*"){
//     alert(num1 * num2);
// }

// else if(opreator === "/"){
//     alert(num1 / num2);
// }

// else{
//     alert(num1 % num2)
// }

// Chapter 12-13
// IF...ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS:

// Qno:1 Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// ans;
// let character = prompt('Please enter your character to checks whether the given input is a number, uppercase letter or lower case letter');
// let value = character.charCodeAt(0);

//Checking for Number
// if (value >= 48 && value <= 57) {
//     alert(character + " is number");
// }

//Checking for UpperCase Letters
// else if (value >= 65 && value <= 90) {
//     alert(character + " is Uppercase Letter");
// }

// Checking for LowerCase Letters
// else if (value >= 97 && value <= 122) {
//     alert(character + " is Lowercase Letter");
// }

//  else {
//     alert("Given input is not a number or letter");
//  }


// Qno:2 Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
//ans;

// let firstNum = +prompt("Enter your first number");
// let secondNum = +prompt("Enter your second number");
// if (firstNum > secondNum){
//     alert(firstNum + " is larger than " + secondNum);
// }

// else if(firstNum < secondNum){
//     alert(secondNum + " is larger than " + firstNum);
// }

// else{
//     alert(firstNum + " and " + secondNum + " both are equal");
// }

// Qno:3 Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
//ans;

// let userInput = +prompt("Enter the number to check whether is positive, negative or zero");
// if (userInput > 0){
//     alert(userInput + " is positive");
// }

// else if(userInput < 0){
//     alert(userInput + " is negative");
// }

// else{
//     alert(userInput + " is zero");
// }

// Qno:4 Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise.
//ans;

// let character = prompt("Enter the character to check i.e vowel or not");
// if (character === "a" || character === "A" || character === "e" || character === "E" || character === "i" || character === "I" || character === "o" || character === "O" || character === "u" || character === "U"){
//     alert(character + " is a vowel");
// }

// else{
//     alert(character + " is not a vowel");
// }

// Qno: 5 Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.
//ans;
// Part : a
// let passward = "12340";

// Part : b
// let userPassward = +prompt("Enter the correct passward");

// Part :c(i)
// if(userPassward === " "){
//     alert("Enter your passward");
// }

// Part :c(ii)
// else if(userPassward === passward){
//     alert("Correct! the passward you entered its matches the orignal one");
// }

// else{
//     alert("your passward does'nt matches with right one");
// }


// Qno:6 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
//ans;

// let greeting;
// let hour = 13;
// if(hour < 18){
//     greeting = "Good day"
//     alert(greeting);
// }

// else{
//     greeting = "Good evening"
//     alert(greeting);
// }

// Qno: 7 Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements.
//ans;
// let time = +prompt("Enter time in 24 hours \n clock format like: 1900 = 7pm.")
// if(time >= 0 && time <= 1200){
//     alert("Good Morning");
// }

// else if(time >= 1200 && time <= 1700){
//     alert("Good Afternoon");
// }

// else if(time >= 1700 && time <= 2100){
//     alert("Good Evening");
// }

// else if(time >= 2100 && time <= 2359){
//     alert("Good night");
// }

// else{
//     alert("Invalid input");
// }


// CHAPTER 14- 16
// ---ARRAYS---

// Qno:1 Declare an empty array using JS literal notation to store
// student names in future.
//ans;
// let studentNames = [];

// Qno:2 Declare an empty array using JS object notation to store
// student names in future.
//ans;
// let studentNames = new Array();

// Qno:3 Declare and initialize a strings array.
//ans;
// let colors = ["red", "yellow", "blue", "purple", "green"];

// Qno: 4 Declare and initialize a numbers array.
//ans;
// let numbers = [5454, 212,876, 908];

// Qno:5 Declare and initialize a boolean array.
//ans;
// let booleanValues = [true, false , false, true];

// Qno: 6 Declare and initialize a mixed array.
//ans;
// let mixedArray = ["inshah", "jamal", "21", "true"];

// Qno: 7 Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
//ans;
// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.phil", "PhD"]
// let count = 0;

// let i = 0;
// document.write("Qualifications: " + "<br />");
// document.write(++count + ")" + qualifications[i++] + "<br />")
// document.write(++count + ")" + qualifications[i++] + "<br />")
// document.write(++count + ")" + qualifications[i++] + "<br />")
// document.write(++count + ")" + qualifications[i++] + "<br />")
// document.write(++count + ")" + qualifications[i++] + "<br />")
// document.write(++count + ")" + qualifications[i++] + "<br />")
// document.write(++count + ")" + qualifications[i++] + "<br />")
// document.write(++count + ")" + qualifications[i++] + "<br />")

// Qno:8 Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
//ans;

// let studentNames =["sahar", "ifra", "inshah"];
// let score = [320, 230, 480];
// let total = 500;

// percentage1 = (score[0] / total)* 100;
// percentage2 = (score[1] / total)* 100;
// percentage3 = (score[2] / total)* 100;

// document.write("Score of " + studentNames[0] + " is " + score[0] + ". Percentage: " + percentage1 + "% <br />")
// document.write("Score of " + studentNames[1] + " is " + score[1] + ". Percentage: " + percentage2 + "% <br />")
// document.write("Score of " + studentNames[2] + " is " + score[2] + ". Percentage: " + percentage3 + "%")

// Qno:9  Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your bro/wser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
//ans;
// let colorNames = ["red", "blue", "green", "purple", "white"];

// Part: a
// let userColor = prompt("enter yoy desire color to be added in the begining of an array");
// colorNames.unshift(userColor);
// document.write("updated array: " + colorNames  + "<br />")

// Part: b
// let userColorned = prompt("enter yoy desire color to be added in the end of an array");
// colorNames.push(userColorned);
// document.write("updated array: " + colorNames  + "<br />")

// Part: c
// let Color1= prompt("Add first color to the begining of an array");
// let Color2= prompt("Add second color to the begining of an array");
// colorNames.unshift(Color1, Color2);
// document.write("updated array: " + colorNames  + "<br />")

// Part: d
// colorNames.shift();
// document.write("updated array: " + colorNames  + "<br />")

// Part: e
// colorNames.pop()
// document.write("updated array: " + colorNames  + "<br />")

// Part: f
// let  index = +prompt("At which index no you want to add color");
// let color = prompt("and which color???")
// colorNames.splice(index,0, color);
// document.write("updated array: " + colorNames  + "<br />");

// Part: g
// let  index = +prompt("At which index no you want to delete color");
// let deleteCount = +prompt("how many colors would you delete???")
// colorNames.splice(index, deleteCount);
// document.write("updated array: " + colorNames  + "<br />");

// Qno: 10 Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
//ans;
// let score = [122,102,110,140];
// document.write("Score Of Students: " + score + "<br />")
// document.write("Ordered Scores Of Students: " + score.sort());

// Qno: 11 Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
//ans;
// let cities = ["karachi", "islamabad", "quetta", "multan", "faislabad", "peshawar"];
// document.write("Cities list: " + "<br />" + cities);
// let selectedCities = cities.slice(1,3);
// document.write("Selected cities list: " + "<br />" + selectedCities);

// Qno:12 Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
//ans;

// let array = ["This ", "is", "my", "cat"];
// document.write("Array: " + "<br />" + array);
// let string = array.join(" ");
// document.write("<br />");
// document.write("String: " + "<br />" + string);

// Qno: 13 Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
//ans;

// let devices = ["keyboard", "mouse", "printer", "monitor"];
// let  out;
// document.write("Devices :" +devices+ "<br>");
// out = devices.shift();
//  document.write("Out"+ "<br>" + out + "<br>");

// out = devices.shift();
// document.write("Out" + "<br>" + out + "<br>");
// out = devices.shift();
// document.write("Out" + "<br>" + out + "<br>");
// out = devices.shift();
// document.write("Out" + "<br>" + out + "<br>");

// Qno: 14 Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-First Out)
//ans;
// let devices = ["keyboard", "mouse", "printer", "monitor"];
// let  out;
// document.write("Devices :" +devices+ "<br>");
// out = devices.pop();
//  document.write("Out"+ "<br>" + out + "<br>");

// out = devices.pop();
// document.write("Out" + "<br>" + out + "<br>");
// out = devices.pop();
// document.write("Out" + "<br>" + out + "<br>");
// out = devices.pop();
// document.write("Out" + "<br>" + out + "<br>");

// Qno: 15 Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:
//ans;

// let phoneMenu = ["apple", "samsung", "motorola", "nokia", "sony", "haier"];
// let index = 0;
// document.write("<select>");
// document.write("<option>" + phoneMenu[index++] + "<option />");
// document.write("<option>" + phoneMenu[index++] + "<option />");
// document.write("<option>" + phoneMenu[index++] + "<option />");
// document.write("<option>" + phoneMenu[index++] + "<option />");
// document.write("<option>" + phoneMenu[index++] + "<option />");
// document.write("<option>" + phoneMenu[index++] + "<option />");
// document.write("<option>" + phoneMenu[index++] + "<option />");
// document.write("<select />");

