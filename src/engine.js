import readlineSync from 'readline-sync';

const steps = 3;
const gameEngine = (generateGameData, description, userName = 'Friend') => {
  console.log(`${description}\n`);
  console.log(`Let's play, ${userName}!\n`);
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
        gameEngine(generateGameData, description, userName);
      }
      return;
    }
  }
  console.log(`Congratulations, ${userName}!\n`);
};
export default gameEngine;
