const Command = require('../../structures/Command');
const { RichEmbed } = require('discord.js');
const config = require("../../config.json");
const { Send, Reply, Embed, CheckNickname } = require("../../structures/Util");
const regions = require("../../assets/json/guild/regions.json")
const moment = require('moment')
const verificationLevels = require("../../assets/json/guild/verificationLevels.json");

module.exports = class BotCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'serverinfo',
			aliases: ['guildinfo'],
			group: 'guildanduserstats',
			memberName: 'serverinfo',
			description: 'Shows Information about the current Guild!',
            clientPermissions: ['EMBED_LINKS'],
            guildOnly: true
		});
	}

	async run(msg, args) {
    const guild = msg.guild
    var ownernickname = ""
    if (guild.owner.nickname) {
    ownernickname += `(aka ${guild.owner.displayName})`
    }
    const embed = new RichEmbed()
    .setAuthor("Serverinfo", "https://raw.githubusercontent.com/Terax235/Lisa/master/assets/embedicons/sinfo.png")
    .setDescription(guild.name)
    .addField(`> Guild Owner`, `${guild.owner.user.tag} ${CheckNickname(guild.owner, "-> aka ")}`)
    .addField(`> Region`, regions[guild.region] ? regions[guild.region] : `None / Invalid`)
    .addField(`> Verification Level`, verificationLevels[guild.verificationLevel] ? verificationLevels[guild.verificationLevel] : `None / Invalid`)
    .addField(`> Created At`, `${moment(guild.createdAt).format("DD.MM.YYYY")} at ${moment(guild.createdAt).format("h:mm A")}`)
    .addField(`> Counts`, `- **${guild.memberCount}** Members\n- **${guild.channels.size}** Channels\n- **${guild.roles.size}** Roles`, true)
    .setThumbnail(guild.iconURL)
    Embed(msg, embed)
    }
}