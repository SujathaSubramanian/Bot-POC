var restify = require('restify');
var builder = require('botbuilder');

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
var connector = new builder.ChatConnector({
    appId: 7ebbded0-6bc7-4904 - 85a9-9d9241b88543,
    appPassword: GRKwbUc3PWNrRRsttbqL0HF
});

var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen())