const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || 'Manu-MD&FIghWaDB#QamrDBlr7iKyOSMCt0zsOQ-1ft_3HhlU9wfQUxV0hMU', // Put your session id here ( after linked check your number and get session id it need start with Manu-MD& ) 🤍
PORT: process.env.PORT || '8080',
MONGODB: process.env.MONGODB || 'mongodb+srv://dinuva:07uy1gLfYFdYy5w0@cluster0.xqfmw9r.mongodb.net/' // අනිවාරෙන් Mongodb Url එකක් ඕනි දන්නෙ නැත්නම් මගෙ වීඩියෝ එක බලලා හදාගන්න.🔥
};
