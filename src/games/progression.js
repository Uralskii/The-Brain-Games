import makeGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const gameBrainProgression = () => {
  const rulesOfGames = 'What number is missing in the progression?';

  const generatedRound = () => {
    const hiddenElement = '..';
    const createdArray = [];
    const arrayLength = 10;

    const randomHiddenElem = getRandomInRange(0, 9);
    const startNumber = getRandomInRange(0, 50);
    const stepProgression = getRandomInRange(0, 5);

    createdArray[0] = startNumber;

    for (let i = 1; i < arrayLength; i += 1) {
      createdArray[i] = createdArray[i - 1] + stepProgression;
    }

    const checkNumber = createdArray.splice(randomHiddenElem, 1, hiddenElement);
    const expectedAnswer = checkNumber.toString();
    const progressionForUser = createdArray.join(' ');

    return [progressionForUser, expectedAnswer];
  };

  makeGames(rulesOfGames, generatedRound);
};

export default gameBrainProgression;
