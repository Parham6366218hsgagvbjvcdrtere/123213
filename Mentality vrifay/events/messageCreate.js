module.exports = async (client, message) => {

    const prefix = '!';
    
    if (message.content.startsWith(prefix)) {
 
        const args = message.content.slice(prefix.length).split(/ +/);
        const cmd = args.shift();
        const command = client.commands.get(cmd);
        if (command) {
            command.execute(client, message, args, cmd, 'ping')
        };

    };

};