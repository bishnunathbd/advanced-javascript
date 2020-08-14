const programmers = [
   {id: 11, name: 'Tuni'},
   {id: 22, name: 'Nishu'},
   {id: 33, name: 'Shaquib'},
   {id: 44, name: 'Samia'},
   {id: 55, name: 'Rasel'},
   {id: 66, name: 'Tanu'},
   {id: 77, name: 'Sagar'},
   {id: 88, name: 'Sanjoy'},
   {id: 99, name: 'Mukul'}
]

// const friends = [];
// for (let i = 0; i < programmers.length; i++) {
//    const element = programmers[i];
//    friends.push(element.name);
// }
// console.log(friends);

const friendsName = programmers.map(p => p.name);
// console.log(friendsName);
const ids = programmers.map(p => p.id);
// console.log(ids);

const bigger = programmers.filter(p => p.id > 50);
// console.log(bigger);

const biggerOne = programmers.find(p => p.id < 50);
console.log(biggerOne);