const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bcp')
		.setDescription('te pide amablemente tu número de cuenta'),
	async execute(interaction) {
		await interaction.reply(
			'sería tan amable de darme su cuenta y contraseña de su tarjeta bcp? :)'
		)
	},
}
