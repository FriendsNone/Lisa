const { CommandoClient } = require('discord.js-commando');
const Discord = require('discord.js');
const { owner, prefix, token, game, status, commandcolor } = require('./config.json')
const path = require('path');
const moment = require('moment');
const { setGame, setStatus } = require('./structures/Util');
var p = prefix
if (!token) return console.log(`[Error] You must provide a Token in the config.json!`)
if (!owner) return console.log(`[Error] You must provide a Owner ID in the config.json!`)
if (!p) return console.log(`[Error] You must provide a Prefix in the config.json!`)
const client = new CommandoClient({owner: owner, commandPrefix: p, disableEveryone: true, unknownCommandResponse: false});
client.registry
.registerDefaultTypes()
.registerGroups([
    ['botinfo', 'Botinfo'],
    ['botowner', 'Bot Owner'],
    ['general', 'General']
])
.registerCommandsIn(path.join(__dirname, 'commands'));
client.on('ready', async () => {
console.log(`=== Bot Login at ${moment(Date.now()).format("DD.MM.YYYY")  + " " + moment(Date.now()).format("HH:mm:ss")} ===`)
console.log(`Logged in as ${client.user.tag} with User ID ${client.user.id}`)
console.log(`== Bot Stats ==`)
console.log(`> Prefix   : ${p}`)
console.log(`> Commands : ${client.registry.commands.size}`)
console.log(`> Guilds   : ${client.guilds.size}`)
console.log(`> Users    : ${client.users.size}`)
console.log(`> Channels : ${client.channels.size}`)
await setGame(game, client)
await setStatus(status, client)
})

try{client.login(token)} catch(e){console.log(`Error in Login: ${e}`)}