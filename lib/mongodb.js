const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://telegra.ph/file/c8b2e77d86e36ca9414e8.jpg' },
    { key: 'ALIVE_MSG', value: '*𝗜𝗺 𝗔𝗹𝗶𝘃𝗲 𝗡𝗼𝘄 ♥*\n*𝚃𝚛𝚢 𝚃𝚑𝚒𝚜 ⤵*\n\n.ai (Your question)\n_example - .ai Hey_\n\n*Save daganim ⤵*\n𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙 - https://wa.me/qr/P6WADRJOKAFUK1\n\nᴍᴀᴅᴇ ʙʏ Hashan' },
    { key: 'PREFIX', value: '' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'MODE', value: 'private' },
    { key: 'AUTO_VOICE', value: 'false' },
    { key: 'AUTO_STICKER', value: 'true' },
    { key: 'AUTO_REPLY', value: 'false' },
    { key: 'AUTO_IMAGE', value: 'true' },
    { key: 'AUTO_VIDEO', value: 'false' },
    { key: 'AUTO_AI', value: 'false' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
