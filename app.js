const { CommandoClient } = require('discord.js-commando');
const Discord = require('discord.js');
const { prefix, token, game, status, commandcolor } = require('./config.json')
const OWNERS = require('./owners.json');
const path = require('path');
const moment = require('moment');
const { setGame, setStatus } = require('./structures/Util');
var p = prefix
if (!token) return console.log(`[Error] You must provide a Token in the config.json!`)
if (!OWNERS) return console.log(`[Error] You must provide a Owner ID in the owners.json!`)
if (!p) return console.log(`[Error] You must provide a Prefix in the config.json!`)
const client = new CommandoClient({owner: OWNERS, commandPrefix: p, disableEveryone: true, unknownCommandResponse: false});
client.registry
.registerDefaultTypes()
.registerGroups([
    ['botinfo', 'Botinfo'],
    ['botowner', 'Bot Owner'],
    ['general', 'General'],
    ['music', 'Music']
])
.registerCommandsIn(path.join(__dirname, 'commands'));
client.on('ready', async () => {
console.log(`=== Bot Login at ${moment(Date.now()).format("DD.MM.YYYY")  + " " + moment(Date.now()).format("HH:mm:ss")} ===`)
console.log(`Lisa Version 0.2`)
console.log(`Logged in as ${client.user.tag} with User ID ${client.user.id}`)
console.log(`== Bot Stats ==`)
console.log(`> Owner    : ${await Promise.all(OWNERS.map(o => client.fetchUser(o).then(u=>u.tag)))} (${OWNERS.length})`)
console.log(`> Prefix   : ${p}`)
console.log(`> Commands : ${client.registry.commands.size}`)
console.log(`> Guilds   : ${client.guilds.size}`)
console.log(`> Users    : ${client.users.size}`)
console.log(`> Channels : ${client.channels.size}`)
await setGame(game, client)
await setStatus(status, client)
})

try{client.login(token)} catch(e){console.log(`Error in Login: ${e}`)}