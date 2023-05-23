import readlineSync from 'readline-sync';
import startGame from '../src/index.js';

const basicOperation = (operation, firstNumber, secondNumber) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return 0;
  }
};

const gameBrainCalc = () => {
  const userName = startGame();
  console.log('What is the result of the expression?');

  let i = 0;
  while (i < 3) {
    const firstNumber = Math.ceil(Math.random(10) * 10);
    const secondNumber = Math.ceil(Math.random(10) * 10);

    const operators = ['+', '-', '*'];
    const randomIndexOfOperators = Math.floor(Math.random() * (operators.length));
    const randomOperator = operators[randomIndexOfOperators];

    console.log(`Question: ${firstNumber} ${randomOperator} ${secondNumber}`);
    const generateAnswer = readlineSync.question('Your answer: ');

    const generateExpression = basicOperation(randomOperator, firstNumber, secondNumber);
    if (Number(generateAnswer) === generateExpression) {
      console.log('Correct!');
    } else {
      console.log(`${generateAnswer} is wrong answer ;(. correct answer was ${generateExpression}`);
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
