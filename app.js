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