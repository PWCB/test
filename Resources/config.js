//Import required libraries
var args = require('minimist')(process.argv.slice(2));
var extend = require('extend');

//Store the environment variable
var environment = args.env || "test";

//Common config... ie: name, version, max player etc...
var common_conf = {
    name: "Nanima Game Server",
    version: "0.0.1",
    environment: environment,
    max_player: 100,
    data_paths: {
        items: __dirname + "\\Game_Data\\" + "Items\\",
        maps: './Resources/Game_Data/Maps/'//__dirname + "\\Game_Data\\" + "Maps\\"
    },
    starting_zone: "rm_map_home"
};

//Environment Specific Configuration
var conf = {
    production: {
        ip: args.ip || "0.0.0.0",
        port: args.port || 8081,
        database: "mongodb://127.0.0.1/test"
    },

    test: {
        ip: args.ip || "0.0.0.0",
        port: args.port || 8082,
        database: "mongodb://138.68.46.95/nanima_prod"
    }
};

extend(false, conf.production, common_conf);
extend(false, conf.test, common_conf);

module.exports = config = conf[environment];

