const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "HapFjbjY#5j04IMY02zFbeAO-K5LvVbSBPu3OKMZSkChpkzGEhBk",
MONGODB: process.env.MONGODB || "mongodb+srv://hashan:2002@cluster0.si1ga4x.mongodb.net/?retryWrites=true&w=majority",
};
