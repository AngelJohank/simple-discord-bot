module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(msg) {
		if (msg.author.bot || !/\bbcp\b/i.test(msg.content)) return

		await msg.reply('escuché bcp B)?')
	},
}
