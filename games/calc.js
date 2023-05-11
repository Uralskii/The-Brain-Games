import readlineSync from 'readline-sync';

const basicOperation = (operation, firstNumber, secondNumber) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return 0;
  }
};

const gameForPlayer = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  let i = 0;
  while (i < 3) {
    const firstNumber = Math.ceil(Math.random(10) * 10);
    const secondNumber = Math.ceil(Math.random(10) * 10);

    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * (operators.length));
    const randomOperators = operators[randomIndex];

    console.log(`Question: ${firstNumber} ${randomOperators} ${secondNumber}`);
    const generateAnswer = readlineSync.question('Your answer: ');

    const generateExpression = basicOperation(randomOperators, firstNumber, secondNumber);
    if (Number(generateAnswer) === generateExpression) {
      console.log('Correct!');
    } if (Number(generateAnswer) !== generateExpression) {
      console.log(`${generateAnswer} is wrong answer ;(. correct answer was ${generateExpression}`);
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
