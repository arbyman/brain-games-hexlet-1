import engine from '../engine';
import getRandomNumber from '../utils';

const description = 'Do you remember the multiplication table?';

export default (userName) => {
  const generateMultiplyGameData = () => {
    const a = getRandomNumber(2, 9);
    const b = getRandomNumber(2, 9);
    const question = `${a} * ${b}`;
    const correctAnswer = `${a * b}`;
    return [question, correctAnswer];
  };

  engine(generateMultiplyGameData, description, userName);
};
