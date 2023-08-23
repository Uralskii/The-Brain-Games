import makeGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

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

const makeCalcGame = () => {
  const rulesOfGame = 'What is the result of the expression?';

  const makeCalculator = () => {
    const firstNumber = getRandomInRange(1, 10);
    const secondNumber = getRandomInRange(1, 10);

    const operators = ['+', '-', '*'];
    const randomIndexOfOperators = Math.floor(Math.random() * (operators.length));
    const randomOperator = operators[randomIndexOfOperators];
    const generateExpression = `${firstNumber} ${randomOperator} ${secondNumber}`;

    const expectedAnswer = getCalculatedResult(randomOperator, firstNumber, secondNumber);
    const convertedAnswer = expectedAnswer.toString();
    return [generateExpression, convertedAnswer];
  };

  makeGames(rulesOfGame, makeCalculator);
};

export default makeCalcGame;
