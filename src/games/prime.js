import makeGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number !== 1;
};

const makePrimeGame = () => {
  const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateRound = () => {
    const question = getRandomInRange(0, 20);
    const answer = isPrime(question) ? 'yes' : 'no';
    return [question, answer];
  };

  makeGames(rulesOfGame, generateRound);
};

export default makePrimeGame;
