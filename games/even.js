import readlineSync from 'readline-sync';
import { getUserName, getRandomValue } from '../src/index.js';

const gameBrainEven = () => {
  const userName = getUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  const attemps = 3;

  while (i < attemps) {
    const generatedNumber = getRandomValue(30);
    console.log(`Question: ${generatedNumber}`);

    const generatedAnswer = readlineSync.question('Your answer: ');

    const isEven = generatedNumber % 2 === 0;
    const isPositiveAnswer = generatedAnswer === 'yes';
    const isNegativeAnswer = generatedAnswer === 'no';
    const isCorrectAnswer = (isPositiveAnswer && isEven) || (isNegativeAnswer && !isEven);

    if (isCorrectAnswer) {
      console.log('Correct!');
    } else if (generatedAnswer === 'no' && generatedNumber % 2 === 0) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    } else if (generatedAnswer === 'yes' && generatedNumber % 2 !== 0) {
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
