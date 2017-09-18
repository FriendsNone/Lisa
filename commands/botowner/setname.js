const { stripIndents } = require('common-tags');
const Command = require('../../structures/Command');
const Discord = require('discord.js');
const config = require("../../config.json");
const { setUsername } = require('../../structures/Util');

module.exports = class SetNameCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'setname',
			aliases: ['setusername'],
			group: 'botowner',
			memberName: 'setname',
			description: 'Sets the Bots Username',
			details: '',
			guarded: true,
			//guildOnly: true,
			args: [
                {
                key: 'name',
                prompt: 'What you want to set my Username as?',
                type: 'string'
                }
            ],
			clientPermissions: ['EMBED_LINKS']
		});
	}

	async run(msg, args) {
    const { name } = args.name
    try {
    if (args.name == this.client.user.username) return msg.reply(`This is already my Username!`)
    setUsername(args.name, this.client)
    } catch (e) {msg.reply(`Error while trying to change the name: ${e}`)}
    }
}