
var Parser = require('binary-parser').Parser;
var StringOptions = {length: 999, zeroTerminated:true};

module.exports = PacketModels = {

    header: new Parser().skip(1)
        .string("command", StringOptions),

    login: new Parser().skip(1)
        .string("command", StringOptions)
        .string("username", StringOptions)
        .string("password", StringOptions),

    register: new Parser().skip(1)
        .string("command", StringOptions)
        .string("username", StringOptions)
        .string("password", StringOptions),

    pos: new Parser().skip(1)
        .string("command", StringOptions)
        .string("inst", StringOptions)
        .string("spr", StringOptions)
        .int16le("target_x", StringOptions)
        .int16le("target_y", StringOptions)
        .int16le("angle", StringOptions),

    damage: new Parser().skip(1)
        .string("command", StringOptions)
        .string("inst", StringOptions)
        .int16le("dmg", StringOptions),
		
	combo: new Parser().skip(1)
        .string("command", StringOptions)
        .string("combostr", StringOptions)
}