import readlineSync from 'readline-sync';
import startGame from '../src/index.js';

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
  return 0;
};

const gameBrainPrime = () => {
  const userName = startGame();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const generateNumber = Math.ceil(Math.random(20) * 20);
    console.log(`Question: ${generateNumber}`);
    const generateAnswer = readlineSync.question('Your answer: ');

    const answerOfPrimeNumber = checkNumberIsPrime(generateNumber);

    if (generateAnswer === 'yes' && answerOfPrimeNumber === true) {
      console.log('Correct!');
    } else if (generateAnswer === 'no' && answerOfPrimeNumber === false) {
      console.log('Correct!');
    } else if (generateAnswer === 'yes' && answerOfPrimeNumber === false) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    } else if (generateAnswer === 'no' && answerOfPrimeNumber === true) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    } else if (generateAnswer !== 'yes' || generateNumber !== 'no') {
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
