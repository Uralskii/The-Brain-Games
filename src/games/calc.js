import makeGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const operators = ['+', '-', '*'];

const getOperator = (operator) => {
  const randomIndexOfOperators = Math.floor(Math.random() * (operators.length));
  return operator[randomIndexOfOperators];
};

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

  const generateRound = () => {
    const firstNumber = getRandomInRange(1, 10);
    const secondNumber = getRandomInRange(1, 10);

    const randomOperator = getOperator(operators);

    const generateExpression = `${firstNumber} ${randomOperator} ${secondNumber}`;
    const expectedAnswer = String(getCalculatedResult(randomOperator, firstNumber, secondNumber));

    return [generateExpression, expectedAnswer];
  };

  makeGames(rulesOfGame, generateRound);
};

export default makeCalcGame;
