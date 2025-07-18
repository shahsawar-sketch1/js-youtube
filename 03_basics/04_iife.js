//  Imediatly Invoked Function Expressions 

(function chai (){
    //NAMED IIFE
    console.log(`DB connected`);
})();// this is syntax of iife which excute immediatly 
//why we use iife ? because of to protect this function from foriegn globle scope

((name) => {
    console.log(`DB CONNECTED two ${name}`);
    
})('shahsawar')
