import makeGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const getLargeDevisor = (num1, num2) => (num2 === 0 ? num1 : getLargeDevisor(num2, num1 % num2));

const makeGameGcd = () => {
  const rulesOfGame = 'Find the greatest common divisor of given numbers.';

  const generateRound = () => {
    const firstNumber = getRandomInRange(0, 20);
    const secondNumber = getRandomInRange(0, 20);

    const generatedNumbers = `${firstNumber} ${secondNumber}`;
    const expectedAnswer = String(getLargeDevisor(firstNumber, secondNumber));

    return [generatedNumbers, expectedAnswer];
  };

  makeGames(rulesOfGame, generateRound);
};

export default makeGameGcd;
