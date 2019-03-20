import engine from '../engine';
import getRandomNumber from '../utils';

const createProgression = (start, step, length) => {
  if (length === 0) {
    return [];
  }
  return [start, ...createProgression(start + step, step, length - 1)];
};

export default () => {
  const description = 'What number is missing in the progression?\n';

  const generateDataGameProgression = () => {
    const start = getRandomNumber(1, 100);
    const step = getRandomNumber(2, 7);
    const length = getRandomNumber(8, 12);
    const indexOfRemovedElem = getRandomNumber(1, length - 2);
    const progression = createProgression(start, step, length);
    const removedElement = progression.splice(indexOfRemovedElem, 1, '..');
    const correctAnswer = `${removedElement}`;
    const question = progression.join(' ');
    return [question, correctAnswer];
  };

  engine(generateDataGameProgression, description);
};
