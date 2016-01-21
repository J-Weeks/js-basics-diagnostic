'use strict';
//We'll learn about require later in the course
const ask = require('../lib/ask.js');

var answer = 'not empty';

while (answer !== '') {
  answer = ask("Guess my secret? ");
  if (answer === 'SeCrEt') {
   console.log("You guessed it!");
   break;
  }
}


// while (answer !== '') {
//    answer = ask("Guess my secret? ");		    answer = ask("Guess my secret? ");
// -  if (answer === 'SeCrEt') {		 +  if (answer >=1 && answer <=10) {
//     console.log("You guessed it!");		     console.log("You guessed it!");
//     break;		     break;
// -  }		 + }else{
// +   console.log('Please try a number between 1 and 10')
// + }
//  }		  }
