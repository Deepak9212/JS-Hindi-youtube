const name = "Deepak";
const repoCount = 60;

//console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("deepak-dc");
//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("e"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 5);
console.log(anotherString);

const newStringOne = "  Deepak  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://deepak.com/deepak%20kumar";
console.log(url.replace("%20", "-"));
console.log(url.includes("khubsurat"));
console.log(gameName.split("-"));
