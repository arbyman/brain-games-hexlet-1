import engine from '../engine';
import getRandomNumber from '../utils';

export default () => {
  const description = 'What is the result of the expression?';
  const operations = ['+', '-', '*'];

  const getOperator = () => operations[getRandomNumber(0, 2)];
  const getOperation = (oper) => {
    switch (oper) {
      case '-':
        return (m, n) => `${Number(m) - Number(n)}`;
      case '*':
        return (m, n) => `${Number(m) * Number(n)}`;
      default:
        return (m, n) => `${Number(m) + Number(n)}`;
    }
  };
  const generateDataGameCalc = () => {
    const a = getRandomNumber(1, 100);
    const b = getRandomNumber(1, 100);
    const oper = getOperator();
    const operation = getOperation(oper);
    const question = `${a} ${oper} ${b}`;
    const correctAnswer = operation(a, b);
    return [question, correctAnswer];
  };
  engine(generateDataGameCalc, description);
};
