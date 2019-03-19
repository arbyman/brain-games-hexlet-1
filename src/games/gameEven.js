#!/usr/bin/env node
import engine from './engine';

export default () => {
  const generateRandomNumber = () => Math.round(Math.random() * 99 + 1);
  const getCorrectAnswer = n => (n % 2 === 0 ? 'yes' : 'no');
  engine(generateRandomNumber, getCorrectAnswer);
};
