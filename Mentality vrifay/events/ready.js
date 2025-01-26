const Discord = require('discord.js');

module.exports = async (client) => {
   
    console.log(`${client.user.username} Is Online`);

    const activities = [
        [{
            name: 'Mentality Rp',
            type: Discord.ActivityType.Playing
        }]
    ] 
    
    setInterval(() => {
    
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        
        client.user.setPresence({
            activities: randomActivity,
            status: 'online'
        })
            
        }, 15 * 1000);

};