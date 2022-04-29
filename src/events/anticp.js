module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(msg) {
		if (msg.author.bot || !/\bcp\b/i.test(msg.content)) return

		await msg.reply('deja el cp ctmr :)')
	},
}
