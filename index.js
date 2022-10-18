const express = require('express');
const axios = require('axios')
const mebots = require('mebots');

// Setup web routing
const app = express();
app.use(express.json())

// Set the bot token from MeBots in .env under BOT_TOKEN
let bot = new mebots.Bot('your_bot_shortname_here', process.env.BOT_TOKEN);

// Use this route as the callback URL for the bot
// Example: https://yourserver.herokuapp.com/receive
// This exapmle simply responds "Pong!" when a user says "/ping".
app.post('/receive', async (req, res) => {
  if (req.body.text === '/ping') {
    sendMessage('Pong!', req.body.group_id);
  }
});


// Function to get the bot with MeBots and send a message
function sendMessage(text, group_id) {
  // Query MeBots to get the GroupMe bot ID for the instance of the bot in this group
  bot.getInstance(group_id).then((instance) => {
    axios.post('https://api.groupme.com/v3/bots/post', {'text': text, 'bot_id': instance.id})
      .then((res) => console.log(res))
      .catch((error) => console.error(error))
  });
}

// Listen for requests
app.listen(3000);
