// If

//const isUserLoggedin = true;
const Temperature = 37;

//if (Temperature === 40) {
//console.log("less than 40");
//} else {
//console.log("temperature is greater than 40");
//}
//console.log("executed");

// <, >, <=, >=, ==, !=, ===,!==

// const score = 200;

// if (score > 100) {
//   const power = "fly";
//   console.log(`user power:${power}`);
// }

//const balance = 1000;
//if (balance > 400) console.log("test");
//console.log("test2");//aisa nhi karna hai

// if (balance < 600) {
//   console.log("less than 600");
// } else if (balance < 700) {
//   console.log("less than 700");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const isUserLoggedin = true;
const debitcard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isUserLoggedin && debitcard) {
  console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
