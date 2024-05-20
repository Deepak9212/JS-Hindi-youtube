// Immediately involked function Expressions(IIFE)

(function chai() {
  //named iife
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("Deepak");
