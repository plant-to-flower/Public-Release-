const Discord = require('discord.js');
const error = "Action unable to be proformed"
const config = require('./config/config.json')
     if(config.on_ready === " "){
        console.error();
        console.log("Please enter a on_ready message!")
 };
     if(config.prefix === " "){
        console.error();
         console.log("Please enter a Prefix!")
};

const client = new Discord.Client();

client.on('ready', ready =>{
    console.log(config.on_ready)
});

client.on('message', message =>{
    if(message.content === `${config.prefix}help`){
        const helpEmbed = new Discord.MessageEmbed()
        .addTitle('Help Command')
        .addField(
            { name:"Ping", value: "A ping command" },
        )
        message.channel.send(helpEmbed)
    }
});

client.on('message', message =>{
    if(message.content === `${config.prefix}ping`){
        message.channel.send('PONG!!!')
    }
})

client.login(config.token)
