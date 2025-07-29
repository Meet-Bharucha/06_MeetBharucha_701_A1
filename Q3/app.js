const readline = require('readline');
const chatbot = require('./chatbot');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("💪 Welcome to Fitness & Diet Bot!");
console.log("Ask me anything related to fitness or diet. Type 'exit' to quit.");

function ask() {
  rl.question("You: ", (input) => {
    const reply = chatbot.getResponse(input);

    console.log("Bot:", reply);

    if (input.toLowerCase() === 'exit' || input.toLowerCase() === 'bye') {
      rl.close();
    } else {
      ask();
    }
  });
}

ask();
