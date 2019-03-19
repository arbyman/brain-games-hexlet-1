#!/usr/bin/env node
import readlineSync from 'readline-sync';
import interviewer from '../index';

export default (expression, checkAnswer) => {
  const userName = interviewer();
  for (let i = 1; i <= 3; i += 1) {
    const question = expression();
    const correctAnswer = checkAnswer(question);
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (correctAnswer === answerUser) {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}')`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
};
