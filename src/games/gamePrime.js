import engine from '../engine';
import getRandomNumber from '../utils';

const isPrime = (n, m = Math.floor(Math.sqrt(n))) => {
  if (m === 1) {
    return true;
  }
  return n % m === 0 ? false : isPrime(n, m - 1);
};
const getCorrectAnswer = n => (isPrime(n) ? 'yes' : 'no');
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

export default () => {
  const generateDataGamePrime = () => {
    const num = getRandomNumber(1, 47);
    const correct = getCorrectAnswer(num);
    return [num, correct];
  };

  engine(generateDataGamePrime, description);
};
