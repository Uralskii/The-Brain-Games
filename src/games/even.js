import makeGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const isEven = (number) => number % 2 === 0;

const makeEvenGame = () => {
  const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateRound = () => {
    const question = String(getRandomInRange());
    const answer = isEven(question) ? 'yes' : 'no';
    return [question, answer];
  };

  makeGames(rulesOfGame, generateRound);
};

export default makeEvenGame;
