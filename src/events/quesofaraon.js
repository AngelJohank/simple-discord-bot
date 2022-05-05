module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(msg) {
		if (msg.author.bot) return
		
		// Detect "que"
		const queReg = /\b(k|ke|q|qe|que|que)\b$/i
		
		if (queReg.test(msg.content)) {
			await msg.reply('ricas sobadotas me das <:lipbite:928741545685962853>')
			return
		}

		// Detect "ra"
		const raReg = /\b(r{1,10}a{1,50})\b/i

		if (raReg.test(msg.content)) {
			await msg.reply('RAAAAAAAAAAAAAAAA 😎👍')
			return
		}
	},
}
