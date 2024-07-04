console.log("This is tutorial-53");
let name ="Ausaf";
let name1 ="Adeeb";
let name2 ="Shahrukh";
// let wish="Hey";

// console.log(wish+" "+name +" is good boy!");
// console.log(wish+" "+name1 +" is good boy!");
// console.log(wish+" "+name2 +" is good boy!");


//With the help of function we can optimise and develope reusable code like below :

let wish="Hey"

function Greet(name,wish="Default value when there is no any value given by the developer then it will be executed"){
    console.log(`${wish} ${name} is good boy!`);
}
Greet(name);
Greet(name1,wish);
Greet(name2,wish);
