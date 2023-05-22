import readlineSync from 'readline-sync';

const gameForPlayer = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('What number is missing in the progression?');

  let b = 0;
  while (b < 3) {
    const hiddenElement = '..';
    const createArray = [];
    const arrayLength = 10;

    const startNumber = Math.ceil(Math.random(10) * 10);
    const stepProgression = Math.ceil(Math.random(5) * 5);

    createArray[0] = startNumber;

    for (let i = 1; i < arrayLength; i += 1) {
      createArray[i] = createArray[i - 1] + stepProgression;
    }
    const checkNumber = createArray.splice(startNumber, 1, hiddenElement);
    const answerOfProgression = Number(checkNumber);
    const arrToStr = createArray.join(' ');

    console.log(`Question: ${arrToStr}`);
    const generateAnswer = readlineSync.question('Your answer: ');
    if (Number(generateAnswer) === answerOfProgression) {
      console.log('Correct!');
    } else if (Number(generateAnswer) !== answerOfProgression) {
      console.log(`${generateAnswer} is wrong answer ;(. Correct answer was ${answerOfProgression}.`);
      break;
    }

    b += 1;
    if (b === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameForPlayer;
