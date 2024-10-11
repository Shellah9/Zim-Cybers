const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "~hello there am :Zim-CYBER BOT from MR SH3LLAH OFC~ @m alive ...",
ALIVE_MSG: process.env.ALIVE_MSG || "hello there am Zim-CYBER BOT from MR SH3LLAH OFC wa mr shellah on 27746184894",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
