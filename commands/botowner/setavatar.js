const { stripIndents } = require('common-tags');
const Command = require('../../structures/Command');
const Discord = require('discord.js');
const config = require("../../config.json");
const { setAvatar } = require('../../structures/Util');

module.exports = class SetAvatarCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'setavatar',
			group: 'botowner',
			memberName: 'setavatar',
			description: 'Sets the Bots Avatar',
			details: '',
			guarded: true,
			//guildOnly: true,
			args: [
                {
                key: 'link',
                prompt: 'What you want to set my avatar as?',
                type: 'string'
                }
            ],
			clientPermissions: ['EMBED_LINKS']
		});
	}

	async run(msg, args) {
    const { link } = args.link
    try {
    setAvatar(args.link, this.client)
    } catch (e) {msg.reply(`Error while changing the avatar: ${e}`)}
    }
}