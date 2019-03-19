#!/usr/bin/env node
import engine from './engine';

export default () => {
  const getOperation = () => {
    const operations = ['+', '-', '*'];
    return operations[Math.round(Math.random() * 2)];
  };
  const generateExpression = () => {
    const a = Math.round(Math.random() * 99 + 1);
    const b = Math.round(Math.random() * 99 + 1);
    const oper = getOperation();
    return `${a} ${oper} ${b}`;
  };
  const getCorrectAnswer = (expression) => {
    const [a, oper, b] = expression.split(' ');
    switch (oper) {
      case '-':
        return `${Number(a) - Number(b)}`;
      case '*':
        return `${Number(a) * Number(b)}`;
      default:
        return `${Number(a) + Number(b)}`;
    }
  };
  engine(generateExpression, getCorrectAnswer);
};
