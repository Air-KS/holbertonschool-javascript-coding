// Import the "readline" module
const readline = require('readline');

// Create a readline interface for user interaction
const rl = readline.createInterface({
  // Set input source to standard input (keyboard)
  input: process.stdin,
  // Set output destination to standard output (console)
  output: process.stdout
});

// Prompt the user with a question and handle their response
rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
  console.log(`Your name is: ${answer}`);
  rl.close();
})
