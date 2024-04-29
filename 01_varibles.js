const accountId = 143341;
let accountEmail = "deepak@google.com";
var accountPassword = "12345";
accountCity = "Madhubani";
let accountState;

//accountId=2  //not allowed

accountEmail = "dc@dc.com";
accountPassword = "212121";
accountCity = "Patna";

console.log(accountId);

/* 
prefer not to use var
because of issue in block scope and functional scope */

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
