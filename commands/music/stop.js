const Command = require('../../structures/Command');
const Discord = require('discord.js');
var servers = {};
module.exports = class BotCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'stop', //Name of the command
			aliases: [], //Command Aliases
			group: 'music', //The Commands Group, scroll down a bit for more info
			memberName: 'stop', //just name it like the Command name
			description: 'Stops Playing Music and Disconnects', //Command Description, like "shows the Bots latency"
            clientPermissions: ['EMBED_LINKS']
		});
    }

    async run(msg, args) {
var server = servers[msg.guild.id];

            try {
                if (msg.guild.voiceConnection) msg.guild.voiceConnection.disconnect();
            } catch (err) {}
        await msg.reply("Disconnected from Voice Channel!")
        }
    }