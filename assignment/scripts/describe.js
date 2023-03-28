// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set its value to a string called 'Dane'
// There's a conditional statement after this checking for name to be defined strictly as 'Mary,'
// in which case the console.log() would return 'Hi, Mary!'
// However in our case, name = 'Dane,' so it will return the else statement 'How do you do?' instead.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Here, we start by declaring the secret variable without defining it, then we declare the code variable as 123.
// The first conditional statement declares secret to return 'super' if code is strictly equal to 123,
// Then it multiplies the value of code (123) by 2 (246).
// The conditional statement that follows would return a different value for secret if code were > 250,
// However, in this case it is not. So console.log(secret) returns "super"

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// First we declare our variables. isStudent has a boolean value of true, age has a numeric value of 34, as does
// zip with a value of 55407. The first statement in the conditional would not return, as the && operator indicates
// both variables would need to meet the defined requirements, and zip is < 80000. The second statement also would not return, 
// as even though the || indicator looks for either requirement to be true,
// neither of them are met. The third statement would then return the console log message 'Welcome to Prime!'
// as isStudent === true. If isStudent were false, but all other variables were kept the same, the last
// console log message would return. 

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// If we're gonna get nitpicky, the description said colorOne should be 'blue' and colorTwo should be 'red'
// So these could be switched, though we're about to change them both to purple so it won't matter in a few lines.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// The problem is, only colorOne is being changed in the example, when the instructions ask for both
// color variables to be changed. We would do this by simply adding another line directly below the new 
// colorOne change to say:
// colorTwo = 'purple'; 
// or colorTwo = colorOne;
// or changing line 152 to say colorOne = colorTwo = 'purple';

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// I believe the question is looking for BOTH values to be true in order to trigger the console.log
// statement, in which case we need to change the || operator to && so that it only returns the message
// if both statements are true. 
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

