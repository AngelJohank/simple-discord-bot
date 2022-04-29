const { SlashCommandBuilder } = require('@discordjs/builders')
const fetch = require('node-fetch')

const endpoint =
	'https://g.tenor.com/v1/search?q=baki&key=R58W60TCG0PF&limit=20'

const getGif = async () => {
	const index = Math.floor(Math.random() * 21)
	const response = await fetch(endpoint)
	const data = await response.json()

	return data.results[index].url
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tunometecabra')
		.setDescription('te dice saramambiche'),
	async execute(interaction) {
		const url = await getGif()
		await interaction.reply(url)
	},
}
