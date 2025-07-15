// const tinderuser = new Object ();

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.islogedin = false

// console.log(tinderuser);


const regular_user = {
    email : "some@gmail.com",
    fullname : {
        userfullname:{
            firstname : "shahsawar",
            lastname : "khan"
        }
    }
}

// console.log(regular_user.fullname?.userfullname.lastname);



const  obj1 = {1 : 'a', 2 : 'b', 3 : 'c'}
const  obj2 = {4 : 'd', 5 : 'e', 6 : 'g'}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}

// console.log(obj3);

const users = [
    {
        id : 1,
        email : "some@google.com "
    },
     {
        id : 1,
        email : "some@google.com "
    },
     {
        id : 1,
        email : "some@google.com "
    },
]

users[1].email
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));// this is very important  its adjust  this access keys 
// console.log(Object.values(tinderuser));//this access values 
// console.log(Object.entries(tinderuser));//for  individual array in array
// console.log(tinderuser.hasOwnProperty('islogedin'));


//=================de structure==========================


const course =  {
    corsename : "js in hindi",
    courseprice : "999",
    corseinstructer : "hitesh choudhray",
}

// course.corseinstructer

const {corseinstructer : instructer} = course

console.log(instructer);

// const navbar = ({company}) => {de structuring 

// }
// navbar(company = "hitesh")



// {
//     "name": "shahsawar",
//    " coursename" : "js in hindi",
//    " price" : "free"
// }

[
    {},
    {},
    {}
]

