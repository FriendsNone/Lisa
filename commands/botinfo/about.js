const { stripIndents } = require('common-tags');
const Command = require('../../structures/Command');
const { RichEmbed } = require('discord.js');
const config = require("../../config.json");
const snekfetch = require('snekfetch')

module.exports = class AboutCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'about',
			aliases: [],
			group: 'botinfo',
			memberName: 'about',
			description: 'Shows info about S-Bot',
			details: '',
			guarded: true,
			//guildOnly: true,
			//args: [],
			clientPermissions: ['EMBED_LINKS']
		});
	}

	async run(msg, args) {
        try {
			const { body } = await snekfetch
				.get('https://sbot.000webhostapp.com/infos.json');
        const embed = new RichEmbed()
		.setTitle(`Info`)
		.setColor(`#04B4AE`)
        .setDescription(`I'm ${this.client.user.username}, a Discord Bot powered by ${body.name}, ${body.description} You can find the Link to the GitHub [here](${body.github}).`)
		.addField(`Staff`, `[List](${body.github}blob/master/STAFF.md)`)
		msg.channel.send({embed})
        } catch (e) {msg.reply(`An error occured: ${e}`)}
    }
}