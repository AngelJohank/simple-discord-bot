const { SlashCommandBuilder } = require('@discordjs/builders')
const { saveglobalmsg } = require('./utils/util-global-msg')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('writeglobalmsg')
		.setDescription('sobreescribe el mensaje global')
		.addStringOption((option) =>
			option.setName('input').setDescription('mensaje').setRequired(true)
		),

	async execute(interaction) {
		saveglobalmsg(interaction, interaction.options.getString('input'))
	},
}
