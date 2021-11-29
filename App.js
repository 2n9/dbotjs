const Discord = require("discord.js");
const client = new Discord.Client();
const token = "";

client.once("ready", () => {
    console.log("bot is now ready");
})

client.login(token);