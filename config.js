const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MuljABKL#_uYqNfuGy3hXD1ebx4zLJ32v-hlK6r9X4e_Q4Rjv6Ns",
MONGODB: process.env.MONGODB || "mongodb://mongo:AWtuAmGpatfmlwZoIaGuNsxLNsFfeLPV@autorack.proxy.rlwy.net:20819",
};
