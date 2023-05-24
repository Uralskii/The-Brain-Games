import readlineSync from 'readline-sync';
import { getUserName, getRandomValue } from '../src/index.js';

const gameBrainProgression = () => {
  const userName = getUserName();
  console.log('What number is missing in the progression?');

  let b = 0;
  const attemps = 3;

  while (b < attemps) {
    const hiddenElement = '..';
    const createdArray = [];
    const arrayLength = 10;

    const randomHiddenElem = getRandomValue(9);
    const startNumber = getRandomValue(10);
    const stepProgression = getRandomValue(5);

    createdArray[0] = startNumber;

    for (let i = 1; i < arrayLength; i += 1) {
      createdArray[i] = createdArray[i - 1] + stepProgression;
    }
    const checkNumber = createdArray.splice(randomHiddenElem, 1, hiddenElement);
    const answerOfProgression = Number(checkNumber);
    const arrToStr = createdArray.join(' ');

    console.log(`Question: ${arrToStr}`);
    const generatedAnswer = readlineSync.question('Your answer: ');
    if (Number(generatedAnswer) === answerOfProgression) {
      console.log('Correct!');
    } else {
      console.log(`${generatedAnswer} is wrong answer ;(. Correct answer was ${answerOfProgression}.`);
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
