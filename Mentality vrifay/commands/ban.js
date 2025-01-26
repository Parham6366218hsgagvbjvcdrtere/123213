const { SlashCommandBuilder } = require('@discordjs/builders');

const targetGuildId = '1258011039623151707';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Ban a member from the server')
        .addUserOption(option => option.setName('user').setDescription('The member to ban').setRequired(true)),
    async execute(interaction) {
        if (interaction.guild.id !== targetGuildId) {
            return interaction.reply({ content: 'این کا', ephemeral: true });
        }

        const member = interaction.options.getMember('user');
        const rolesAllowed = [
            '1283604498174054452', // job manager
            '1274779576727503005', // Police Admin Faction
            //'1251026361200545903', // Dark
        ];

        const hasRole = interaction.member.roles.cache.some(role => rolesAllowed.includes(role.id));

        if (!hasRole) {
            return interaction.reply({ content: 'تلاش نکن گل پسر :kissing_heart:', ephemeral: true });
        }

        if (!member) {
            return interaction.reply({ content: 'Member Not Found.', ephemeral: true });
        }

        try {
            await member.ban();
            return interaction.reply({ content: `${member.user.tag} Has Been Banned.` });
        } catch (error) {
            console.error('Error Banning Member:', error);
            return interaction.reply({ content: 'An Error Occurred While Trying To Ban The Member.', ephemeral: true });
        }
    },
};