module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(msg) {
		if (msg.author.bot || !/\b(cp|cepesito)\b/i.test(msg.content)) return

		await msg.reply('deja el cp ctmr :)')
	},
}
