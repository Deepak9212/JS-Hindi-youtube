//primitive

//7 types: String,Number,boolean, null ,undefined,symbol,Bigint

const score = 200;
const scoreValue = 200.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("234");
const anotherId = Symbol("234");

console.log(id === anotherId);

//const bigNumber=345666987399603n

//reference(non primitive)

//Array,objects,function

const heros = ["Shaktiman", "nagraj", "doga"];
let myObj = {
  name: "Sonu",
  age: 22,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof isLoggedIn);
