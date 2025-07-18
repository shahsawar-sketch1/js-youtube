//scope is start from let,var,const 
//var c= 300
let a = 300
if (true){//the curly brasis is the scope  {}

let a = 10
const b = 20
// var c = 30
// console.log("inner: ",a);

}//if curly brasis is in object it will not be scope 

// console.log(a);// the a s work is till to the scope 
// console.log(b); //same as a 
// console.log(c);// var variable will work in the scope

// ===============nested scope====================

function one (){
    const username = "hitesh"

    function two (){
        const website  = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
    
}
// one()

if (true){
    const username = "hitesh"

    if (username === "hitesh"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log( username + website); // website scope is finished in if case
    

}

// console.log(username);


//++++++++++interesting++++++++++
console.log(addone(2))
function addone (num){
    return num +1
}


// console.log(addtwo(5));

const addtwo = function (num){
    return num + 2
}


