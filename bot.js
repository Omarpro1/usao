const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("542699575086153729")
setInterval(function() {
channel.send(`alone in my life :D`);
}, 30)
})

client.login(process.env.BOT_TOKEN);