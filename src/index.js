import readlineSync from 'readline-sync';

export const startGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

export const getRandomValue = (num1) => {
  const randomNumber = Math.ceil(Math.random(num1) * num1);
  return randomNumber;
};
