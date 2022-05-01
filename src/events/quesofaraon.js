module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(msg) {
		if (msg.author.bot) return

		if (/\b(que|q|k|ke|qe)\b$/m.test(msg.content)) {
			await msg.reply('so :)')
			return
		}

		if (/\b(r{1,5}a{1,20})\b/i.test(msg.content)) {
			await msg.reply('RAAAAAAAAAAAAAAAA 😎👍')
			return
		}
	},
}
