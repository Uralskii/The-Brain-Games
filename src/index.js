import readlineSync from 'readline-sync';

const makeGames = (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [questionForUser, correctAnswer] = generateRound();
    console.log(`Question: ${questionForUser}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isCorrectAnswer = correctAnswer === userAnswer;
    if (isCorrectAnswer) {
      console.log('Correct!');
    }
    if (!isCorrectAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default makeGames;
