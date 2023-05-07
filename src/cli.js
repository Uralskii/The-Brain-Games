import readlineSync from 'readline-sync';

const questionOfName = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!`);
  return questionOfName;
};

export default questionOfName;
