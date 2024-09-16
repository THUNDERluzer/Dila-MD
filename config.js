const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "4u8lyaBB#lIUvTWnMaKzs5nSBguL6DhavNsPNdnIglTlzz20EOOM",
MONGODB: process.env.MONGODB || "mongodb://mongo:AWtuAmGpatfmlwZoIaGuNsxLNsFfeLPV@autorack.proxy.rlwy.net:20819",
};
