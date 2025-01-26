const { Component } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'button',
    
    async execute(client, message, arg, cmd) {

        const button1 = new Discord.ButtonBuilder()
            .setStyle(Discord.ButtonStyle.Link)
            .setURL('https://discord.gg/mk57GzkcYe')
            .setLabel('Discord')
            .setEmoji('<:discotoolsxyzicon:1298926347183194172>');

        const row = new Discord.ActionRowBuilder()
            .addComponents(button1)

        
        
        message.reply({ components: [row] , ephemeral: true});
  
    },

};