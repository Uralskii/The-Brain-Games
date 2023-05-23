import readlineSync from 'readline-sync';
import startGame from '../src/index.js';

const gameBrainEven = () => {
  const userName = startGame();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const generateNumber = Math.floor(Math.random(30) * 30);
    console.log(`Question: ${generateNumber}`);

    const generateAnswer = readlineSync.question('Your answer: ');
    if ((generateAnswer === 'yes' && generateNumber % 2 === 0) || (generateAnswer === 'no' && generateNumber % 2 !== 0)) {
      console.log('Correct!');
    } else if (generateAnswer === 'no' && generateNumber % 2 === 0) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    } else if (generateAnswer === 'yes' && generateNumber % 2 !== 0) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    } else {
      console.log('Is wrong answer!');
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    i += 1;
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameBrainEven;
