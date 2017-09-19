const snekfetch = require('snekfetch');
const { promisify } = require('util');
const config = require('../config.json');

class Util {
    static setGame(game, client) {
    try {client.user.setGame(game.replace("{p}", config.prefix).replace("{g}", client.guilds.size.toLocaleString()).replace("{u}", client.users.size.toLocaleString()))} catch (e) {console.log(`Error while changing Game: ${e}`)}
    }
    static setStatus(status, client) {
    try {client.user.setStatus(status)} catch (e) {console.log(`Error while changing Status: ${e}`)}
    }
    static setUsername(name, client) {
    try {client.user.setUsername(name)} catch (e) {console.log(`Error while changing Username: ${e}`)}
    }
    static setAvatar(link, client) {
    try {client.user.setAvatar(link)} catch (e) {console.log(`Error while changing Avatar: ${e}`)}
    }
    static Send(msg, content) {
    return msg.channel.send(content)
    }
    static Reply(msg, content) {
    return msg.channel.send(`${msg.author}, ${content}`)
    }
    static Embed(msg, embed) {
    if (!embed.footer){embed.setFooter(`Requested by ${msg.author.tag}`, msg.author.displayAvatarURL); embed.setTimestamp()}
    if (!embed.color) {embed.setColor(`#BF2456`)}
    return msg.channel.send({embed})
    }
    static CheckNickname(member, msg) {
    if (member.nickname) {return msg + member.nickname}
    else return ""
    } 
}

module.exports = Util;