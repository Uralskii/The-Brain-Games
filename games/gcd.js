import readlineSync from 'readline-sync';
import { getUserName, getRandomValue } from '../src/index.js';

const largestDevisor = (num1, num2) => {
  let devisor;
  if (num1 < num2) {
    for (let i = num1; i > 0; i -= 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        devisor = i;
        return devisor;
      }
    }
  } else if (num1 > num2) {
    for (let i = num2; i > 0; i -= 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        devisor = i;
        return devisor;
      }
    }
  } return num1;
};

const gameBrainGcd = () => {
  const userName = getUserName();
  console.log('Find the greatest common divisor of given numbers.');

  let i = 0;
  const attemps = 3;

  while (i < attemps) {
    const firstNumber = getRandomValue(20);
    const secondNumber = getRandomValue(20);

    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const generatedAnswer = readlineSync.question('Your answer: ');

    const answerOfDeviser = largestDevisor(firstNumber, secondNumber);
    if (Number(generatedAnswer) === answerOfDeviser) {
      console.log('Correct!');
    } else {
      console.log(`${generatedAnswer} is wrong answer ;(. Correct answer was ${answerOfDeviser}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    i += 1;
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameBrainGcd;
