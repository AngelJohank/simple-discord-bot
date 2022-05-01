module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(msg) {
		if (msg.author.bot) return

		if (/\b(que|q|k|ke|qe)\b$/m.test(msg.content)) {
			await msg.reply('so :)')
			return
		}

		if (/\b([rR]{1,5}[aA]{1,20})\b$/m.test(msg.content)) {
			await msg.reply('RAAAAAAAAAAAAAAAA 😎👍')
			return
		}
	},
}
