let answerList =['yes' , 'no' , 'maybe' , 'for sure', 'idk' , 'what?' , 'dont ask me' ];
const readLine=require ('readline-sync');

readLine.question('Hi their today i will be showing you a program that acts like a magic eight ball');

readLine.question('do you understan yes or no');








let randomNum = Math.floor (Math.random()*answerList.length);
console.log(randomNum);
let randomAnswer = answerList[randomNum];
console.log(randomAnswer);

