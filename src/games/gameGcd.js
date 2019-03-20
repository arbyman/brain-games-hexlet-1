#!/usr/bin/env node
import engine from '../engine';
import { greatestCommonDivisor as gcd, getRandomNumber } from '../utils';

export default () => {
  const description = 'Find the greatest common divisor of given numbers.\n';
  const generateDataGameGcd = () => {
    const a = getRandomNumber(1, 100);
    const b = getRandomNumber(1, 100);
    const question = `${a} ${b}`;
    const correctAnswer = `${gcd(Number(a), Number(b))}`;
    return [question, correctAnswer];
  };
  engine(generateDataGameGcd, description);
};
