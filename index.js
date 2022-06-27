
var SlackBot = require('slackbots');
const axios = require('axios');

// token: 'xoxb-147215122837-2758392428150-FPGmfSx9c3YEWq9tDeBdZWwH',
// const bot = new SlackBot({
//   token:'xoxb-147215122837-2758392428150-FPGmfSx9c3YEWq9tDeBdZWwH',
//   name: 'bot-power'
// });
// create a bot
var bot = new SlackBot({
  token: 'xoxb-147215122837-2758392428150-FPGmfSx9c3YEWq9tDeBdZWwH', // Add a bot https://my.slack.com/services/new/bot and put the token 
  name: 'Bot-Power'
});

bot.on('start', function() {
  // more information about additional params https://api.slack.com/methods/chat.postMessage
  var params = {
      icon_emoji: ':cat:'
  };
  
  // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
  bot.postMessageToChannel('-bot-aldo', 'meow!', params);
  
  // define existing username instead of 'user_name'
  bot.postMessageToUser('ALDO IVAN SANCHEZ LEON', 'meow!', params); 
  
  // If you add a 'slackbot' property, 
  // you will post to another user's slackbot channel instead of a direct message
  // bot.postMessageToUser('user_name', 'meow!', { 'slackbot': true, icon_emoji: ':cat:' }); 
  
  // // define private group instead of 'private_group', where bot exist
  // bot.postMessageToGroup('private_group', 'meow!', params); 
});
