
// hoisting

var bonus = 20;

function sum(num1, num2) {
   let result = num1 + num2 + bonus;
   // console.log(bonus);
   if (result > 9) {
      var mood = 'happy';
      let user = 'abcd'
      // console.log(user);
   }
   // console.log(mood);
   // console.log(user);
   
   // console.log(day);  // undefined
   var day = 'friday';

   // console.log(month);  // Cannot access 'month' before initialization
   let month = 'July';


   return result;
}

const output = sum(4, 6);
// console.log(result);
// console.log(output);