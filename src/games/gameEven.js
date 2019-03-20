#!/usr/bin/env node
import engine from '../engine';
import getRandomNumber from '../utils';

export default () => {
  const checkParity = n => n % 2 === 0;
  const getCorrectAnswer = n => (checkParity(n) ? 'yes' : 'no');
  const description = 'Answer "yes" if number even otherwise answer "no".\n';

  const generateDataGameEven = () => {
    const num = getRandomNumber(1, 100);
    const correct = getCorrectAnswer(num);
    return [num, correct];
  };

  engine(generateDataGameEven, description);
};
