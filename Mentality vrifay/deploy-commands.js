// Example using discord.js
const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const commands = [
  {
    name: 'new-command',
    description: 'Description of new command',
  },
  // other commands
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();