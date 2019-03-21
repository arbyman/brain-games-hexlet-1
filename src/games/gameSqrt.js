import engine from '../engine';
import getRandomNumber from '../utils';

const createNumberSqrList = (length) => {
  if (length === 0) {
    return [];
  }
  return [length ** 2, ...createNumberSqrList(length - 1)];
};
const length = 15;
const description = 'What is the square root?';

export default (userName) => {
  const generateSqrtGameData = () => {
    const numberForQuestion = getRandomNumber(0, length - 1);
    const numberSqrList = createNumberSqrList(length);
    const question = numberSqrList[numberForQuestion];
    const correctAnswer = `${Math.sqrt(question)}`;
    return [question, correctAnswer];
  };

  engine(generateSqrtGameData, description, userName);
};
