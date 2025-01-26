module.exports = {
    name: 'ping',

    async execute(client, message, arg, cmd) {
        
        message.reply({ content: "Pong"})


    },
};