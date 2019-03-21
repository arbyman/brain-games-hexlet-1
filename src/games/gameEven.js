import engine from '../engine';
import getRandomNumber from '../utils';

const isParity = n => n % 2 === 0;
const description = 'Answer "yes" if number even otherwise answer "no".';
export default (userName) => {
  const generateEvenGameData = () => {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isParity(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  engine(generateEvenGameData, description, userName);
};
