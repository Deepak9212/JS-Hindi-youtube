//var c = 300;

let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  //console.log("INNER: ", a);
}

//console.log(a);
//console.log(b);
//console.log(c);

function one() {
  const username = "Deepak";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //console.log(website);
  two();
}
//one();

if (true) {
  const username = "Deepak";
  if (username === "Deepak") {
    const website = " youtube";
    console.log(username + website);
  }
  //console.log(website);
}

//console.log(username);

//********************Interesting***********************

console.log(addone(6));

function addone(num) {
  return num + 1;
}

//addtwo(6); isko yha declare nhi kr sakte
const addtwo = function (num) {
  return num + 2;
};
