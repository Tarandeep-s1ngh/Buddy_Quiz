var readlineSync = require('readline-sync');

var userName = readlineSync.question('What is your name ? ');
console.log('Hello '+ userName + '! Welcome to HOW WELL DO YOU KNOW TARAN Quiz.');
console.log('---------------------------------------------------');
console.log('NOTE:');
console.log('Please type all the answers in lowercase.');
console.log('You get +1 for each right answer and -1 for each wrong answer');
console.log('---------------------------------------------------');

var score = 0;

function play(question,answer){
  var userAnswer = readlineSync.question(question)
  
  if(userAnswer === answer){
    console.log('You are right!');
    score = score+1;
  }
  else{
    console.log('You are wrong! Right answer was '+ answer);
    score = score-1;
  }

  console.log('Current score : '+ score);
  console.log('----------------------------------')
}


var questions = [{
  question: "How old am I? ",
  answer: "21"
}, {
  question: "Which is my favourite online game? ",
  answer: "chess"
}, {
  question: "What is the name of my favourite anime? ",
  answer: "naruto"
}, {
  question: "which one do I like? Coffee or Tea? ",
  answer: "coffee"
}]

for(var i=0; i<questions.length; i++ ){
  var currentQuestion = questions[i];
  
  play(currentQuestion.question,currentQuestion.answer)

}

console.log('YAY! You scored: ' + score);
