

function saymyname () {
console.log("s");
console.log("h");
console.log("a");
console.log("h");
console.log("s");
console.log("a");
console.log("w");
console.log("a");
console.log("r");
}

// console.log(saymyname());

// function addtownumbers(number1, number2){
//    console.log(number1+number2);
//  return number1 + number2
// }
// if you write return after return nothing will be print 
function addtownumbers(number1, number2){
  
//  let result = number1 + number2
//  return result

return number1 + number2
 
}
// const result = addtownumbers(30000,40000)

// console.log(result);

// in this case we set default value if username is undefind the default value will be print 
function loggedusermessage (username= 'sam'){
    if (!username ){
        console.log('please enter a username');
        return
        
    }
    return `${username} just logged in`
}
// username === undefind is equal of !username 

// console.log(loggedusermessage("shahsawar"));// if i not give any username it will print a undefined
//  console.log(loggedusermessage("SHAHSAWAR".toLowerCase()));



function calculatecartprice (...num1){
    return num1
}
 
// console.log(calculatecartprice(200,400,500));


const username = {
    name : "hitesh",
    price : 199
}

function handleobject (anyobject){
    console.log(`user is ${anyobject.name} and price is ${anyobject.price}`);
    
}

// handleobject(username)
// handleobject({
//     name: "shahsawar",
//     price: 399
// })

const myNewArray = [200, 300, 100, 600]

function secondValue (getArray){
    return getArray[1]
}

// console.log(secondValue(myNewArray))
console.log(secondValue([200, 300, 100, 400]))// no diffrence in it  if you give it in array 
