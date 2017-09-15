const { stripIndents } = require('common-tags');
const Command = require('../../structures/Command');
const { RichEmbed } = require('discord.js');
const config = require("../../config.json");
const snekfetch = require('snekfetch')

module.exports = class AboutCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ping',
			aliases: [],
			group: 'general',
			memberName: 'ping',
			description: 'Shows the Bots Latency',
			details: '',
			guarded: true,
			//guildOnly: true,
			//args: [],
			clientPermissions: ['EMBED_LINKS']
		});
	}

async run(msg, args, client) {
    msg.reply(`Ping?`).then(m=>m.edit(`Pong🏓! Latency is ${m.createdTimestamp - msg.createdTimestamp}ms. API Latency is ${Math.round(this.client.ping)}ms`))
}
};