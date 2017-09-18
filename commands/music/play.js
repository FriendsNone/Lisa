const Command = require('../../structures/Command');
const Discord = require('discord.js');
const config = require("../../config.json");
const ytdl = require("ytdl-core");
var servers = {};

        // Music Function
        function play(connection, message) {
            var server = servers[message.guild.id];
        
            server.dispatcher = connection.playStream(ytdl(server.queue[0], {
                filter: "audioonly",
                quality: "lowest"
            }));
            ytdl.getInfo(server.queue[0], function(err, info) {
                message.channel.send(`Now Playing: **${info.title}**, requested by ${message.author}!`);
            });
            
            
            server.queue.shift();
            
            server.dispatcher.on("end", function() {
                if (server.queue[0]) {
                    play(connection, message);
                } else {
                    try {
                        connection.disconnect();
                    } catch(err) {
        
                    }
                }
            })
        }
module.exports = class BotCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'play', //Name of the command
			aliases: [], //Command Aliases
			group: 'music', //The Commands Group, scroll down a bit for more info
			memberName: 'play', //just name it like the Command name
			description: 'Plays a Track (BETA)', //Command Description, like "shows the Bots latency"
            clientPermissions: ['EMBED_LINKS'],
            args: [
				{
					key: 'track',
					prompt: 'What track would you like to hear?',
					type: 'string'
				}
			]
		});
	}

    async run(msg, args) {

            if (!msg.member.voiceChannel) return msg.reply("You must be in a voice channel to play some tunes.");
            let argument = args.track
            if (!servers[msg.guild.id]) {
                servers[msg.guild.id] = {
                    queue: []
                };
            }

            var server = servers[msg.guild.id]; 
            server.queue.push(argument);

            if (!msg.guild.voiceConnection) {
                msg.member.voiceChannel.join().then(function(connection) {
                    play(connection, msg);
                })
            }
        }}