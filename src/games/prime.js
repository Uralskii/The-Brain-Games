import makeGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const checkNumberIsPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const makePrimeGame = () => {
  const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateRound = () => {
    const generatedNumber = getRandomInRange(0, 20).toString();
    const expectedAnswer = checkNumberIsPrime(generatedNumber) ? 'yes' : 'no';
    return [generatedNumber, expectedAnswer];
  };

  makeGames(rulesOfGame, generateRound);
};

export default makePrimeGame;
