import makeGames from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const getProgression = (stepProgression, randomHiddenElem, startNumber) => {
  const hiddenElement = '..';
  const createdArray = [];
  const arrayLength = 10;
  createdArray[0] = startNumber;

  for (let i = 1; i < arrayLength; i += 1) {
    createdArray[i] = createdArray[i - 1] + stepProgression;
  }
  const hiddenNumber = String(createdArray.splice(randomHiddenElem, 1, hiddenElement));
  const peogressionOfNumber = createdArray.join(' ');

  return [peogressionOfNumber, hiddenNumber];
};

const gameBrainProgression = () => {
  const rulesOfGames = 'What number is missing in the progression?';

  const generatedRound = () => {
    const randomHiddenElem = getRandomInRange(0, 9);
    const startNum = getRandomInRange(0, 50);
    const step = getRandomInRange(0, 5);

    const [progressionForUser, expectedAnswer] = getProgression(step, randomHiddenElem, startNum);
    return [progressionForUser, expectedAnswer];
  };

  makeGames(rulesOfGames, generatedRound);
};

export default gameBrainProgression;
