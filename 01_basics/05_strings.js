let name = "shahsawar "
let repoCount= 50

// console.log(name + repoCount + " value");//this out dated style

// console.log(`hello my name is ${name} and repo count is ${repoCount}`);


let gameName= "shahsawar-com-mohmand"

// console.log(gameName[0]);
// console.log(gameName.__proto__);// all proto type will clear in console 

// console.log(gameName.length);
// console.log(gameName.toUpperCase());// after this() we will see the changes in string 

console.log(gameName.charAt(8));

console.log(gameName.indexOf('r'));


const newstring=gameName.substring(0,5)

console.log(newstring);


const anotherstring=gameName.slice(-8,3)
console.log(anotherstring);

const anotherStringOne="    shahsawar     "

console.log(anotherStringOne);
console.log(anotherStringOne.trim());


const url ="https://shahsawar.com/shahsawar%20mohmand"

console.log(url.replace('%20','-'));

console.log(url.includes('shahsawar'));

console.log(gameName.split());












