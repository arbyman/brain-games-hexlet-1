const brainGames = [
  'brain-even',
  'brain-calc',
  'brain-gcd',
  'brain-progression',
  'brain-prime',
  'brain-sqrt',
  'brain-multiply',
];
const description = 'Choose your Brain Game!';
export default () => {
  console.log(`${description}\n`);
  brainGames.forEach(game => console.log(game));
};
