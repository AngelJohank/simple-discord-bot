const { SlashCommandBuilder } = require('@discordjs/builders')
const { sendglobalmsg } = require('./utils/util-global-msg')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('globalmsg')
		.setDescription('muestra un mensaje global'),
	execute(interaction) {
		sendglobalmsg(interaction)
	},
}
