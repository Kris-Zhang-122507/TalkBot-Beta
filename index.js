const discord = require('discord.js')
const { token } = require('./config.json')
const Client = new discord.Client({
    intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MEMBERS, discord.Intents.FLAGS.GUILD_BANS, discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, discord.Intents.FLAGS.GUILD_INTEGRATIONS, discord.Intents.FLAGS.GUILD_WEBHOOKS, discord.Intents.FLAGS.GUILD_INVITES, discord.Intents.FLAGS.GUILD_VOICE_STATES, discord.Intents.FLAGS.GUILD_PRESENCES, discord.Intents.FLAGS.GUILD_MESSAGES, discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS, discord.Intents.FLAGS.GUILD_MESSAGE_TYPING, discord.Intents.FLAGS.DIRECT_MESSAGES, discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING]
})
const { Interaction } = require("discord.js");
const ms = require("ms");
const config = require('./config.json')



const fs = require('fs');

const prefix = '.'
 
Client.commands = new discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    Client.commands.set(command.name, command);
}

Client.on('ready', () => {
    console.log(`${Client.user.tag} is online!`)

    const statusArray = ['Minecraft, PLAYING','#General Chat, WATCHING', 'Music, LISTENING', 'Everything Go Wrong, WATCHING', 'Everyone, WATCHING', 'Security Logs, LISTENING', `${prefix}help, WATCHING`]
    setInterval(() => {
        const random = statusArray[Math.floor(Math.random() * statusArray.length)].split(', ')
        const status = random[0]
        const mode = random[1]
        Client.user.setActivity(status, {type: mode})
    }, 5800)


})

Client.on('messageCreate', message => {

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    

    if(command === 'ping'){
        message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(Client.ws.ping)}ms`); 
      
        
    }

    if(command === 'ding'){
        Client.commands.get('ding').execute(message, args);
    }


    if(command === 'pingpong'){
        Client.commands.get('pingpong').execute(messsage, args);
    }
    
    

    if(command ==='uptime'){
        let days = Math.floor(Client.uptime / 86400000);
        let hours = Math.floor(Client.uptime / 3600000) % 24;
        let minutes = Math.floor(Client.uptime / 60000) % 60;
        let seconds = Math.floor(Client.uptime / 1000) % 60;
  
        message.channel.send(` __Uptime:__\n ${days} day(s),\n ${hours} hour(s),\n ${minutes} minute(s),\n ${seconds} second(s)`);
      
    }


    
})


Client.login(token)