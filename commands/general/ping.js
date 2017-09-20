const { stripIndents } = require('common-tags');
const Command = require('../../structures/Command');
const { RichEmbed } = require('discord.js');
const config = require("../../config.json");
const snekfetch = require('snekfetch')
const { perms } = require("../../structures/Util");

module.exports = class BotCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ping',
			group: 'general',
			memberName: 'ping',
			description: 'Shows the Bots Latency'
		});
	}

async run(msg, args, client) {
    msg.reply(`⌛ *Testing connectivity…*`).then(m=>m.edit(`🏓 **Pong!** Latency is **${m.createdTimestamp - msg.createdTimestamp} ms**.\nAPI Latency is **${Math.round(this.client.ping)}ms**`))
}
};