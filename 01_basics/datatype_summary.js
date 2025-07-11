//  primitive

// 7 type : string , number, boolean, null , undefined,symbol,bigint


const score= 100
const scorevalue=100.3

const isloggedin= false
const outsidetemp=null
let userEmail;

const id = Symbol('123')
const anotherId= Symbol('123')

// console.log(id === anotherId);

const bigNumber= 232324345455656757n

// console.log(typeof bigNumber);




// Refrence type (non primitive)
// Array ,object, Function


const heros= ["shahsawar","mavia","abuzar","hammad"]
// console.table(heros);

let myobj={
    name: "shahsawar",
    age : 17,
    class : 12
}

// console.log(myobj);
// console.table(typeof myobj)


// function (){}//this is definition of function in javascript


const myfunction = function(){
    console.log("hello world")
}
// console.log(typeof anotherId);




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=========================

// stack(primitive),heap(non-primitive)

let myYoutubeName="shahsawar"

let anotheryoutube=myYoutubeName

anotheryoutube="Anton x"

console.log(anotheryoutube);
console.log(myYoutubeName);


let userone = {
    email : "user@google.com",
    upi:"user@ybl",
}
let usertwo= userone

usertwo.email ="user@youtube.com"
usertwo.upi ="user@shahsawar"

console.log(userone.email);
console.log(usertwo.email);

