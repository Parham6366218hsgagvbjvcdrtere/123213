require('dotenv').config(); // بارگذاری متغیرهای محیطی

const { Client, Intents, Collection } = require('discord.js');
const { joinVoiceChannel, getVoiceConnection } = require('@discordjs/voice');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

const token = process.env.TOKEN; // تعریف توکن بات

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MEMBER] });

client.commands = new Collection();

// Load commands -------------------------------------------------------------------------------------------
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
    commands.push(command.data.toJSON());
}

// Register slash commands ---------------------------------------------------------------------------------
client.once('ready', async () => {
    const rest = new REST({ version: '9' }).setToken(""); // استفاده از توکن بات
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(client.user.id),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
    console.log(`Ready! Logged in as ${client.user.tag} from ready.js in events folder! and servers: ${client.guilds.cache.size}`);
});

// Handle slash commands -----------------------------------------------------------------------------------
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

// Handle message commands ---------------------------------------------------------------------------------
client.on('messageCreate', async message => {
    if (message.content.startsWith('!')) {
        const args = message.content.slice(1).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName);
        if (!command) return;

        try {
            await command.execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('There was an error while executing this command!');
        }
    }
});

// Load event files ----------------------------------------------------------------------------------------
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// Voice connection ----------------------------------------------------------------------------------------
client.on('messageCreate', async message => {
    if (message.content === '!join') {
        const channel = message.guild.channels.cache.get(''); // شناسه کانال صوتی خود را اینجا وارد کنید
        
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
client.login("");


