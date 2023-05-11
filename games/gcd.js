import readlineSync from 'readline-sync';

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

const gameForPlayer = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let i = 0;
  while (i < 3) {
    const firstNumber = Math.ceil(Math.random(20) * 20);
    const secondNumber = Math.ceil(Math.random(20) * 20);

    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const generateAnswer = readlineSync.question('Your answer: ');

    const answerOfDeviser = largestDevisor(firstNumber, secondNumber);

    if (Number(generateAnswer) === answerOfDeviser) {
      console.log('Correct!');
    } else if (generateAnswer !== answerOfDeviser) {
      console.log(`${generateAnswer} is wrong answer ;(. Correct answer was ${answerOfDeviser}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    i += 1;
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameForPlayer;
