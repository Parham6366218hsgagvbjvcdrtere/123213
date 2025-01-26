const Discord = require('discord.js');

module.exports = async (client, member) => {

    const channel = client.channels.cache.get("");    

    const embed = new Discord.EmbedBuilder()
        .setColor('Blue')
        .setTitle('Welcome')
        .setThumbnail(member.displayAvatarURL({ size: 1024 }))
        .setDescription(`${member.displayName} Aziz, Be Server ${member.guild.name} Khosh Omnadi`)
        .setTimestamp()
        .setFooter({
            text: 'Joined At',
            iconURL: 'https://images-ext-1.discordapp.net/external/eVqGeYMTLScc4DpTNbS8uEx6nXw6-dMnpjfLejRg0Us/%3Fsize%3D1024/https/cdn.discordapp.com/banners/963172687843303494/e025113c57aac0fc0f4407c34336c91a.webp?format=webp&width=1177&height=662'
            
            
        });
        


    await channel.send({ embeds: [embed] });


};




