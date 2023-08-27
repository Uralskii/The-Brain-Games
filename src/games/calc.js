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
      throw new Error(`Invalid operation - ${operation}`);
    }
  }
};

const makeCalcGame = () => {
  const rulesOfGame = 'What is the result of the expression?';

  const generateRound = () => {
    const firstNumber = getRandomInRange(1, 10);
    const secondNumber = getRandomInRange(1, 10);

    const randomOperator = getOperator(operators);

    const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
    const answer = String(getCalculatedResult(randomOperator, firstNumber, secondNumber));

    return [question, answer];
  };

  makeGames(rulesOfGame, generateRound);
};

export default makeCalcGame;
