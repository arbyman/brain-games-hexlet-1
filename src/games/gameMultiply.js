import engine from '../engine';
import getRandomNumber from '../utils';

const description = 'Do you remember the multiplication table?';

export default () => {
  const generateDataGameMultiply = () => {
    const a = getRandomNumber(2, 9);
    const b = getRandomNumber(2, 9);
    const question = `${a} * ${b}`;
    const correctAnswer = `${a * b}`;
    return [question, correctAnswer];
  };

  engine(generateDataGameMultiply, description);
};
