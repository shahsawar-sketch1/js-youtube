//singleton
//object.create singleton made form this .this is constructer mothed .

// object letrals
const mysym = Symbol("key1")

const JSUser = {
    name : "shahsawar",
    age : 17,
    [mysym ]: "mykey1",
    "full name" : "shahsawar khan",
    location : "peshawar",
    email : "shah123@gamil.com",
    islogedin : false,
    lastlogedin : ["monday",'saturday']
}

// console.log(JSUser.email);
// console.log(JSUser["email"]);

// console.log(JSUser.full name);//if it is string it will not be print with .full name
// console.log(JSUser["full name"]);

// console.log( JSUser[mysym]);


JSUser.email = "shahsawar@chatgpt.com"

// console.log(JSUser.email);

// Object.freeze(JSUser)
JSUser.email = "shahsawar@facebook.com"
// console.log(JSUser.email);
// console.log(JSUser);



JSUser.greeting = function () {
    console.log("hello js users");
    
    
}
JSUser.greetingtwo = function () {
    console.log(`hello js users ,${this.name}`);
    
    
}



console.log(JSUser.greeting());

console.log(JSUser.greetingtwo());




