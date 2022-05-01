module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(msg) {
		if (msg.author.bot || !/\b(cp|cepesito)\b/i.test(msg.content)) return

		await msg.channel.send(`deja el cp ${msg.author.username} o que arranco los webos :)`)
	},
}
