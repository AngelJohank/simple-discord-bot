module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(msg) {
		if (msg.author.bot || !/\b(bcp|cepesito)\b/i.test(msg.content)) return

		await msg.reply('escuché bcp B)?')
	},
}