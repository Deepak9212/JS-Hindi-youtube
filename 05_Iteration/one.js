//for

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is the best number");
  }
  // console.log(element);
}

for (let i = 1; i <= 10; i++) {
  //console.log(`Inner loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`outer loop value ${j} and inner loop ${i}`);
    //console.log(i + "*" + j + " = " + i * j);
  }
}

let Myarray = ["flash", "shaktiman", "batman"];
//console.log(Myarray.length);
for (let index = 0; index < Myarray.length; index++) {
  const element = Myarray[index];
  //console.log(element);
}

// Break and continue

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`Value of i is:${index}`);
// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is:${index}`);
}
