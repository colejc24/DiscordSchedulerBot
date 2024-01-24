const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cevent')
        .setDescription('Creates a new scheduled event'),
    async execute(interaction) {
        await interaction.reply(`This command is under construction! Sorry, ${interaction.user.username}!`);
    },
};