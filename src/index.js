import readlineSync from 'readline-sync';
import brainEven from './games/gameEven';
import brainCalc from './games/gameCalc';
import brainGcd from './games/gameGcd';
import brainProgression from './games/gameProgression';
import brainPrime from './games/gamePrime';
import brainSqrt from './games/gameSqrt';
import brainMultiply from './games/gameMultiply';

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
const gameMenu = (playerName) => {
  console.log('Welcome to the Brain Games!\n');
  const userName = !playerName ? readlineSync.question('May I have your name? ') : playerName;
  console.log(`Choose your Brain Game, ${userName}!\n`);
  brainGames.forEach(({ name }, key) => console.log(`${key}. ${name}`));
  const userChoice = readlineSync.question('Choose a game or enter "0" to exit: ');
  if (userChoice === '0') {
    console.log(`See you later, ${userName}!`);
    return;
  }
  if (brainGames.has(userChoice)) {
    const { game } = brainGames.get(userChoice);
    game(userName);
  } else {
    console.log(`Games with number "${userChoice}" does not exist! Try again or enter "0" to exit.\n`);
  }
  gameMenu(userName);
};
export default gameMenu;
