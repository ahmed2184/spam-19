const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});







client.on("ready", () => {
let channel =     client.channels.get("519853469600055317")
setInterval(function() {
channel.send(`asdfasfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf`);
}, 25)
})

var prefix = "19";

client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);


// -say

  if (command === "say") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }

});





// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
