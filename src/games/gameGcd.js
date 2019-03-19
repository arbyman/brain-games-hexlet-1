#!/usr/bin/env node
import engine from './engine';

export default () => {
  const generateTwoNumbers = () => {
    const a = Math.round(Math.random() * 99 + 1);
    const b = Math.round(Math.random() * 99 + 1);
    return `${a} ${b}`;
  };
  const gcd = (m, n) => (n === 0 ? m : gcd(n, m % n));
  const getCorrectAnswer = (numbers) => {
    const [a, b] = numbers.split(' ').sort();
    return `${gcd(Number(a), Number(b))}`;
  };
  engine(generateTwoNumbers, getCorrectAnswer);
};
