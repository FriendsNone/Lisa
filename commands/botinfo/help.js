const { stripIndents } = require('common-tags');
const Command = require('../../structures/Command');
const Discord = require('discord.js');
const config = require("../../config.json");

module.exports = class BotCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'help',
			aliases: ['commands', 'h'],
			group: 'botinfo',
			memberName: 'help',
			description: 'Shows a List of Commands!',
			guarded: true,
			clientPermissions: ['EMBED_LINKS'],
			args: [
				{
					key: 'command',
					prompt: 'Which Command you want to get Information for?',
					type: 'string',
					default: ''
				}
			]
		});
	}

	async run(msg, args) {
        const { command } = args;
        const commands = this.client.registry.findCommands(command, false, msg);
		if (command) {
			if (commands.length === 1) {
				const embed = new Discord.RichEmbed()
					.setAuthor(`${commands[0].name}`, "https://i.imgur.com/2YnR9rD.png")
                    .setDescription(stripIndents`Description: ${commands[0].description || '-'}\nDetailed: ${commands[0].details || '-'}`)
					.setColor(`#04B4AE`)
					.setFooter("Requested By " + msg.author.tag, msg.author.displayAvatarURL)
					.setTimestamp()
					.addField('> Usage',
						msg.anyUsage(`${commands[0].name} ${commands[0].format ? commands[0].format : ''}`))
					.addField('> Aliases',
						commands[0].aliases.join(', ') || 'None')
					.addField('> Group',
						commands[0].group.name);
				return msg.channel.send({embed});
			} else if (commands.length > 1) {
				return msg.channel.send(`Multiple commands found: ${commands.map(c => c.name).join(', ')}`);
			}
			return msg.channel.send(`Seems like this Command does not exist. Use ${msg.usage(null)} to view the avaible Commands.`);
		} else {
            const embed = new Discord.RichEmbed()
			    .setAuthor("Commands", "https://i.imgur.com/2bKJuXq.png")
				.setDescription(`[Use ${msg.usage('<command>')} for more info about a Command!]()`)
				.setColor(`#04B4AE`);
				embed.setTimestamp()
				embed.setFooter("Requested By " + msg.author.tag, msg.author.displayAvatarURL)
			for (const group of this.client.registry.groups.values()) {
				embed.addField(`❯ ${group.name}`,
				group.commands.map(c => `[${c.name}]() - ${c.description || '*No Description Set*'}`).join('\n') || 'None');
			}
				await msg.channel.send({embed});
		}
	}
};