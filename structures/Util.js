const snekfetch = require('snekfetch');
const { promisify } = require('util');
const config = require('../config.json');

class Util {
    static setGame(game, client) {
    try {client.user.setGame(game.replace("{p}", config.prefix).replace("{g}", client.guilds.size))} catch (e) {console.log(`Error while changing Game: ${e}`)}
    }
    static setStatus(status, client) {
    try {client.user.setStatus(status)} catch (e) {console.log(`Error while changing Status: ${e}`)}
    }
}

module.exports = Util;