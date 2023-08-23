import makeGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

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

const makeGameGcd = () => {
  const rulesOfGame = 'Find the greatest common divisor of given numbers.';

  const generateRound = () => {
    const firstNumber = getRandomInRange(0, 20);
    const secondNumber = getRandomInRange(0, 20);
    const generatedNumbers = `${firstNumber} ${secondNumber}`;
    const generateAnswer = largestDevisor(firstNumber, secondNumber);
    const expectedAnswer = generateAnswer.toString();

    return [generatedNumbers, expectedAnswer];
  };

  makeGames(rulesOfGame, generateRound);
};

export default makeGameGcd;
