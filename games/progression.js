import readlineSync from 'readline-sync';
import { startGame, getRandomValue } from '../src/index.js';

const gameBrainProgression = () => {
  const userName = startGame();
  console.log('What number is missing in the progression?');

  let b = 0;
  while (b < 3) {
    const hiddenElement = '..';
    const createArray = [];
    const arrayLength = 10;

    const randomHiddenElem = getRandomValue(9);
    const startNumber = getRandomValue(10);
    const stepProgression = getRandomValue(5);

    createArray[0] = startNumber;

    for (let i = 1; i < arrayLength; i += 1) {
      createArray[i] = createArray[i - 1] + stepProgression;
    }
    const checkNumber = createArray.splice(randomHiddenElem, 1, hiddenElement);
    const answerOfProgression = Number(checkNumber);
    const arrToStr = createArray.join(' ');

    console.log(`Question: ${arrToStr}`);
    const generateAnswer = readlineSync.question('Your answer: ');
    if (Number(generateAnswer) === answerOfProgression) {
      console.log('Correct!');
    } else {
      console.log(`${generateAnswer} is wrong answer ;(. Correct answer was ${answerOfProgression}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    b += 1;
    if (b === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameBrainProgression;
