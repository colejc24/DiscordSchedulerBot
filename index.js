import dotenv from 'dotenv'
dotenv.config()     

import { Client, Events, GatewayIntentBits } from 'discord.js';

const fs = require('node:fs');
const path = require('node:path');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessages
    ],
});

client.commands = new Collection();

client.login(process.env.DISCORD_TOKEN);

client.on("messageCreate", async (message) => {
    
    console.log(message)

    if (!message?.author.bot) {
        message.author.send(`Echo ${message.content}`);
    }
});