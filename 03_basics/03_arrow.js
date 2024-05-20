const user = {
  username: "Deepak",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username},welcome to website`);
    // console.log(this);
  },
};

//user.welcomeMessage();
//user.username = "karan";
//user.welcomeMessage();
//console.log(this);

//function chai() {
// let username = "Deepak";
//console.log(this.username);
//}
//chai();

//function chai =function() {
//  let username = "Deepak";
//console.log(this.username);
//}

const chai = () => {
  let username = "Deepak";
  console.log(this);
};
//chai();

//const addTwo = (num1, num2) => {
//return num1 + num2;
//};

//const addTwo = (num1, num2) => num1 + num2;
//const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => ({ username: "Deepak" });
console.log(addTwo(6, 9));
