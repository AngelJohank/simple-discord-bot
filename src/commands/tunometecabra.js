const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tunometecabra')
		.setDescription('te dice saramambiche'),
	async execute(interaction) {
		await interaction.reply('saramambiche 💪')
	},
}
