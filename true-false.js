// Falsy:
   // 0
   // ""  (empty string)
   // undefined
   // null
   // NaN
   // false

// Truthy
   // "0", " ", [], {}, ...



const age = 0; // -4, 4
// if (age) {
//    console.log('Condition is true');      
// } else {
//    console.log('Condition is false');
// }


// const name = '';  // shuvo
// let name;
// let name = null;
let name = {};
console.log(name);
if (name) {
   console.log('Condition is true');      
} else {
   console.log('Condition is false');
}