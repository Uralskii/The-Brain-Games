import readlineSync from 'readline-sync';
import { getUserName, getRandomValue } from '../src/index.js';

const getCalculatedResult = (operation, firstNumber, secondNumber) => {
  switch (operation) {
    case '+': {
      return firstNumber + secondNumber;
    }
    case '-': {
      return firstNumber - secondNumber;
    }
    case '*': {
      return firstNumber * secondNumber;
    }
    default: {
      return 0;
    }
  }
};

const gameBrainCalc = () => {
  const userName = getUserName();
  console.log('What is the result of the expression?');

  let i = 0;
  const attemps = 3;

  while (i < attemps) {
    const firstNumber = getRandomValue(10);
    const secondNumber = getRandomValue(10);

    const operators = ['+', '-', '*'];
    const randomIndexOfOperators = Math.floor(Math.random() * (operators.length));
    const randomOperator = operators[randomIndexOfOperators];

    console.log(`Question: ${firstNumber} ${randomOperator} ${secondNumber}`);
    const generatedAnswer = readlineSync.question('Your answer: ');

    const generatedExpression = getCalculatedResult(randomOperator, firstNumber, secondNumber);
    if (Number(generatedAnswer) === generatedExpression) {
      console.log('Correct!');
    } else {
      console.log(`${generatedAnswer} is wrong answer ;(. correct answer was ${generatedExpression}`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    i += 1;
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameBrainCalc;
