function sayMyName() {
  console.log("D");
  console.log("E");
  console.log("E");
  console.log("P");
  console.log("A");
  console.log("K");
}

//sayMyName();

//function addTwoNumbers(number1, number2) {
//console.log(number1 + number2);
//}

function addTwoNumbers(number1, number2) {
  //let result = number1 + number2;
  //return result;
  return number1 + number2;
}

const result = addTwoNumbers(4, 7);
//console.log("Result:", result);

function loginUserMessage(username = "karan") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} Just logged in`;
}

//console.log(loginUserMessage("Deepak"));
//console.log(loginUserMessage("Deepak"));

function calcaluteCartPrice(val1, val2, ...num1) {
  return num1;
}

//console.log(calcaluteCartPrice(200, 400, 500, 30000));

const user = {
  username: "Deepak",
  prices: 299,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.prices}`
  );
}

//handleObject(user);

handleObject({
  username: "sam",
  prices: 499,
});

const myNewArray = [300, 600, 800, 1200];

function returnSecondValue(getArray) {
  return getArray[1];
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300, 600, 7000, 200]));
