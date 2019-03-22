import readlineSync from 'readline-sync';

const steps = 3;
const gameEngine = (generateGameData, description) => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  console.log(`${description}\n`);
  for (let i = 1; i <= steps; i += 1) {
    const [question, correctAnswer] = generateGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}').\n`);
      const userAnswerReplayGame = readlineSync.question(`Play again, ${userName}? (yes/no) `);
      if (userAnswerReplayGame === 'yes') {
        gameEngine(generateGameData, description);
      }
      return;
    }
  }
  console.log(`Congratulations, ${userName}!\n`);
};
export default gameEngine;
