// array 2

const marvel_heros = ["iron man", "thor", "hulk"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[2][2]);


const allheros =  marvel_heros.concat(dc_heros)

// console.log(allheros);



const all_new_heros = [...marvel_heros,...dc_heros] //this is spread operator to concate the elements
//  people prefers that mostly because if it have another element simply like this
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[5,6,[4,5]]]

const  real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);


// console.log(Array.isArray("shahsawar"));
// console.log(Array.from("shahsawar"));
// console.log(Array.from({name : "shahsawar"}));// interesting it can't convert into array 


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.form);



console.log(Array.of(score1,score2,score3));







