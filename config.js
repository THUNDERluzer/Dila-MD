const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "QDESEIRZ#2PJ53UlufFa14Yp0NLGfxDq3eKocIVzQSES_53mqR3I",
MONGODB: process.env.MONGODB || "mongodb://mongo:AWtuAmGpatfmlwZoIaGuNsxLNsFfeLPV@autorack.proxy.rlwy.net:20819",
};
