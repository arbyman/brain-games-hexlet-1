import engine from '../engine';
import getRandomNumber from '../utils';

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  const generatePrimeGameData = () => {
    const question = getRandomNumber(2, 47);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  engine(generatePrimeGameData, description);
};
