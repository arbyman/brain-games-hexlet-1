import engine from '../engine';
import getRandomNumber from '../utils';

const isEven = n => n % 2 === 0;
const description = 'Answer "yes" if number even otherwise answer "no".';
export default () => {
  const generateEvenGameData = () => {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  engine(generateEvenGameData, description);
};
