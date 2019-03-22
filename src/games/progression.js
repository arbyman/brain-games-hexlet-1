import engine from '../engine';
import getRandomNumber from '../utils';

const createProgression = (start, step, length) => {
  if (length === 0) {
    return [];
  }
  return [start, ...createProgression(start + step, step, length - 1)];
};
const description = 'What number is missing in the progression?';

export default () => {
  const generateProgressionGameData = () => {
    const start = getRandomNumber(1, 100);
    const step = getRandomNumber(2, 7);
    const length = getRandomNumber(8, 12);
    const indexOfRemovedElement = getRandomNumber(0, length - 1);
    const progression = createProgression(start, step, length);
    const removedElement = progression.splice(indexOfRemovedElement, 1, '..');
    const correctAnswer = removedElement.toString();
    const question = progression.join(' ');
    return [question, correctAnswer];
  };

  engine(generateProgressionGameData, description);
};
