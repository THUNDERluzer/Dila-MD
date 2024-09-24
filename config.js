const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IJ4VBZgC#UJuNWTaRXVPGrb5ZhZ7L2dN9mmZAW9TI0AcZ0DI2cnM",
MONGODB: process.env.MONGODB || "mongodb://mongo:AWtuAmGpatfmlwZoIaGuNsxLNsFfeLPV@autorack.proxy.rlwy.net:20819",
};
