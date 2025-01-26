const Discord = require('discord.js');
const fs = require('node:fs');
const { joinVoiceChannel, getVoiceConnection } = require('@discordjs/voice');

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildVoiceStates,
        Discord.GatewayIntentBits.MessageContent
    ],
});

client.commands = new Discord.Collection();


const commands = fs.readdirSync('./commands/');
for (const file of commands) {
    const command = require(`./commands/${file}`);
    client. commands.set(command.name, command);
};


const events = fs.readdirSync('./events/');
for (const file of events) {
    const event = require(`./events/${file}`);
    client.on(file.split('.')[0], event.bind(null, client));

};


client.on('messageCreate', async message => {
    if (message.content === '!join') {
        const channel = message.guild.channels.cache.get('1329190554222985249'); // شناسه کانال صوتی خود را اینجا وارد کنید
        
        if (!channel) {
            return message.reply('کانال صوتی پیدا نشد.');
        }
        
        try {
            const connection = joinVoiceChannel({
                channelId: channel.id,
                guildId: channel.guild.id,
                adapterCreator: channel.guild.voiceAdapterCreator,
                selfDeaf: true,
                selfMute: true,
            });
            message.reply('به کانال صوتی ملحق شدم.');
        } catch (error) {
            console.error(error);
            message.reply('خطایی در ملحق شدن به کانال صوتی رخ داد.');
        }
    }})


client.login("")    
