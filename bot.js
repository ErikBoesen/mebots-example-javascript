var HTTPS = require('https');
var mebots = require('mebots');

var bot = new mebots.Bot('your_bot_shortname_here', process.env.BOT_TOKEN);

function respond() {
    var request = JSON.parse(this.req.chunks[0]),
        this.res.writeHead(200);

    if (request.text.startswith('/ping')) {
        postMessage('Pong!');
    } else {
        console.log('Received irrelevant message.');
    }
    this.res.end();
}

function postMessage() {
    var botResponse, options, body, botReq;

    botResponse = cool();

    options = {
        hostname: 'api.groupme.com',
        path: '/v3/bots/post',
        method: 'POST'
    };


    body = {
        'bot_id' : botID,
        'text' : botResponse
    };

    botReq = HTTPS.request(options, function(res) {
        if (res.statusCode == 202) {
            // Request was successful.
        } else {
            console.log('received bad status code ' + res.statusCode);
        }
    });

    botReq.on('error', function(err) {
        console.log('error posting message '  + JSON.stringify(err));
    });
    botReq.on('timeout', function(err) {
        console.log('timeout posting message '  + JSON.stringify(err));
    });
    botReq.end(JSON.stringify(body));
}


exports.respond = respond;
