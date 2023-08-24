import makeGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const isEven = (number) => number % 2 === 0;

const makeEvenGame = () => {
  const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateRound = () => {
    const generatedNumber = String(getRandomInRange());
    const expectedAnswer = isEven(generatedNumber) ? 'yes' : 'no';
    return [generatedNumber, expectedAnswer];
  };

  makeGames(rulesOfGame, generateRound);
};

export default makeEvenGame;
