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
}

module.exports = Util;