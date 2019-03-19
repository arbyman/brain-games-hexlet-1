#!/usr/bin/env node
import readlineSync from 'readline-sync';
import interviewer from './index';

export default () => {
  const userName = interviewer();
  const generateRandomNumber = () => Math.round(Math.random() * 100);
  const getCorrectAnswer = n => (n % 2 === 0 ? 'yes' : 'no');
  for (let i = 1; i <= 3; i += 1) {
    const number = generateRandomNumber();
    const correctAnswer = getCorrectAnswer(number);
    console.log(`Question: ${number}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (correctAnswer === answerUser) {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}')`);
      console.log('Let\'s try again, Bill!');
      return;
    }
  }
};
