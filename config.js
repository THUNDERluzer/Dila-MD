const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ozVD3DyJ#4IDpxkudMbsRfc8smAxjqRwC0WCU1Lb8o_QqUNz4qbE",
MONGODB: process.env.MONGODB || "mongodb://mongo:yhyvZkVbLogomCsGxRynydnidZMxUxuq@junction.proxy.rlwy.net:48866",
};
