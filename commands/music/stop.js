const Command = require('../../structures/Command');
const Discord = require('discord.js');
var servers = {};
module.exports = class BotCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'stop',
			aliases: [],
			group: 'music',
			memberName: 'stop',
			description: 'Stops Playing Music and Disconnects',
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