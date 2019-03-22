import readlineSync from 'readline-sync';
import brainEven from './games/even';
import brainCalc from './games/calc';
import brainGcd from './games/gcd';
import brainProgression from './games/progression';
import brainPrime from './games/prime';
import brainSqrt from './games/sqrt';
import brainMultiply from './games/multiply';

const brainGames = new Map([
  ['1', {
    name: 'brain-even',
    game: brainEven,
  }],
  ['2', {
    name: 'brain-calc',
    game: brainCalc,
  }],
  ['3', {
    name: 'brain-gcd',
    game: brainGcd,
  }],
  ['4', {
    name: 'brain-progression',
    game: brainProgression,
  }],
  ['5', {
    name: 'brain-prime',
    game: brainPrime,
  }],
  ['6', {
    name: 'brain-sqrt',
    game: brainSqrt,
  }],
  ['7', {
    name: 'brain-multiply',
    game: brainMultiply,
  }],
]);
const gameMenu = () => {
  console.log('Choose your Brain Game:\n');
  brainGames.forEach(({ name }, key) => console.log(`${key}. ${name}`));
  const userChoice = readlineSync.question('Choose a game or enter "0" to exit: ');
  if (userChoice === '0') {
    console.log('See you later!');
    return;
  }
  if (brainGames.has(userChoice)) {
    const { game } = brainGames.get(userChoice);
    game();
  } else {
    console.log(`Games with number "${userChoice}" does not exist! Try again or enter "0" to exit.\n`);
  }
  gameMenu();
};
export default gameMenu;
