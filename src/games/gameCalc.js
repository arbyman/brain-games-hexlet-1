import engine from '../engine';
import getRandomNumber from '../utils';

const description = 'What is the result of the expression?';
export default (userName) => {
  const operations = ['+', '-', '*'];

  const getOperator = () => operations[getRandomNumber(0, operations.length - 1)];
  const getOperation = (oper) => {
    switch (oper) {
      case '-':
        return (m, n) => `${m - n}`;
      case '*':
        return (m, n) => `${m * n}`;
      default:
        return (m, n) => `${m + n}`;
    }
  };
  const generateCalcGameData = () => {
    const a = getRandomNumber(1, 100);
    const b = getRandomNumber(1, 100);
    const operator = getOperator();
    const operation = getOperation(operator);
    const question = `${a} ${operator} ${b}`;
    const correctAnswer = operation(a, b);
    return [question, correctAnswer];
  };
  engine(generateCalcGameData, description, userName);
};
