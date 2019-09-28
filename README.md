# Sample GroupMe NodeJS Bot using MeBots
[**Python**](https://github.com/ErikBoesen/mebots-example-python) | **JavaScript** | [**Ruby**](https://github.com/ErikBoesen/mebots-example-ruby)

## Introduction

A simple GroupMe bot that reacts to messages sent within a group, designed to demonstrate how to use the MeBots API and serve as a template for other bots.

Please see [this tutorial](https://github.com/groupme/bot-tutorial-nodejs) for general information about how to set up a GroupMe bot in Node, including Heroku setup instructions.

## Setup
Open `bot.js` in your favorite editor and find the line where the bot is instantiated:
```js
var bot = new mebots.Bot('your_bot_shortname_here', process.env.BOT_TOKEN;
```
Replace `your_bot_shortname_here` with the shortname of your bot, which is visible while editing your bot on the MeBots web interface.

Then, set the `BOT_TOKEN` environment variable in your shell to the token available in the bot editing panel.
```sh
export BOT_TOKEN=0123456789abcdef
```
Or on Heroku:
```sh
heroku config:set BOT_TOKEN=0123456789abcdef
```

## Author
[Erik Boesen](https://github.com/ErikBoesen)
