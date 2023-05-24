import readlineSync from 'readline-sync';
import { getUserName, getRandomValue } from '../src/index.js';

const checkNumberIsPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  if (number > 2) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  return true;
};

const gameBrainPrime = () => {
  const userName = getUserName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let i = 0;
  const attemps = 3;

  while (i < attemps) {
    const generatedNumber = getRandomValue(20);
    console.log(`Question: ${generatedNumber}`);
    const generatedAnswer = readlineSync.question('Your answer: ');

    const answerOfPrimeNumber = checkNumberIsPrime(generatedNumber);

    const isPrime = checkNumberIsPrime(generatedNumber);
    const isPositiveAnswer = generatedAnswer === 'yes';
    const isNegativeAnswer = generatedAnswer === 'no';
    const isCorrectAnswer = (isPositiveAnswer && isPrime) || (isNegativeAnswer && !isPrime);

    if (isCorrectAnswer) {
      console.log('Correct!');
    } else if (generatedAnswer === 'yes' && answerOfPrimeNumber === false) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    } else if (generatedAnswer === 'no' && answerOfPrimeNumber === true) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    } else if (generatedAnswer !== 'yes' || generatedNumber !== 'no') {
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

export default gameBrainPrime;
