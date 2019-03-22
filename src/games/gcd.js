import engine from '../engine';
import getRandomNumber from '../utils';

const getGcd = (m, n) => (n === 0 ? m : getGcd(n, m % n));
const description = 'Find the greatest common divisor of given numbers.';
export default () => {
  const generateGcdGameData = () => {
    const a = getRandomNumber(1, 100);
    const b = getRandomNumber(1, 100);
    const question = `${a} ${b}`;
    const correctAnswer = `${getGcd(a, b)}`;
    return [question, correctAnswer];
  };
  engine(generateGcdGameData, description);
};
