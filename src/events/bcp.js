module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(msg) {
		if (msg.author.bot || !/\b(bcp)\b/i.test(msg.content)) return

		await msg.channel.send(
			'alguién dijo BCP B)? \nporfa, deposítenme pe csmre oe que... me van a matar causa \nme van a matar B( \npipipi **PIPIPI :(**'
		)
	},
}
