//date 

let mydate = new Date()
// console.log(mydate);// its not readible to human
// console.log(mydate.toString());//its a bit better 
// console.log(mydate.toDateString());//its just print date in english string
// console.log(mydate.toISOString());//iso and json are same
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());//its print just date with more readiblity
// console.log(mydate.toLocaleString());//its has date and also exact time
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());
// console.log(mydate.getTimezoneOffset());
// console.log(typeof mydate);//object type

let myCreateDate= new Date(2023,0,23)
// let myCreateDate= new Date(2023,0,23,25,3,6)
// let myCreateDate= new Date("2023-01-14")
// let myCreateDate= new Date("01-12-1290")
let oldDate = new Date (1290,6,22)
// console.log(oldDate.toDateString());
// console.log(myCreateDate.toLocaleString());



let myStampDate = Date.now()

// console.log(myStampDate);
// console.log(myCreateDate.getTime());

// console.log(Date.now()/1000);

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{//to show all functions of locale string simply press ctrl and space 
 weekday: "long"

}));
 








