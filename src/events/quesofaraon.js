module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(msg) {
		if (msg.author.bot) return

		if (/\b(k|ke|q|qe|que|qué|que)\b$/m.test(msg.content)) {
			await msg.reply('ricas sobadotas me das <:lipbite:928741545685962853>')
			return
		}

		if (/\b(r{1,5}a{1,20})\b/i.test(msg.content)) {
			await msg.reply('RAAAAAAAAAAAAAAAA 😎👍')
			return
		}
	},
}
