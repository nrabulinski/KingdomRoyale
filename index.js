const Discord = require('discord.js')
const Commands = require('./commands.js')

let mybot = new Discord.Client()
let sessions = {}
let commands = new Commands(sessions)

mybot.on('ready', () => {
   console.log('Let\'s have a meaningless fight to the death')
   mybot.user.setStatus('active', 'with 6 boys and girls')
})

mybot.on('message', (message) => {
   let text = message.content
   if (text.substring(0, 4) !== '/kr ') { return }
   commands.validate(message)
});

mybot.login(process.env.BOT_TOKEN);
