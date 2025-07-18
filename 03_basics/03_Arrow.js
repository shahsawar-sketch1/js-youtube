const user = {
    username: "shahsawar",
    price: 999,

    welcome: function(){
        console.log(`${this.username}, welcome to  website`);
        console.log(this);
        
        
    }
}

// user.welcome()
// user.username = "hitesh"
// user.welcome()

// console.log(this);//if we print it it simple print {} empty


// function chai(){

    // let username = "shahsawar"
    // console.log(this.username);
    
// }

// chai()

// const chai = function(){
    
//     let username = "shahsawar"
//     console.log(this.username);

// }
// chai ()

const chai = () => { // now this is arrow function
    
    let username = "shahsawar"
    console.log(this);

}
chai ()


// const addtwo = (num1 , num2) => {
//     return num1 + num2
// }   

// const addtwo = (num1 , num2) =>  num1 + num2//it asume that this will be work
//    const addtwo = (num1 , num2) =>  (num1 + num2)// if i put it into paranthesis . no need add return or
//    if i put into curly brasis then it need add return
   const addtwo = (num1 , num2) =>  ({username : "shahsawar"})//ye paranthesis main kam karta hain

console.log(addtwo (3, 5))

// const myArray = [2, 3, 4]

// myArray.forEach()



