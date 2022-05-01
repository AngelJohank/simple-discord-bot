module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(msg) {
		if (msg.author.bot || !/\b(cp|cepesito)\b/i.test(msg.content)) return

		await msg.channel.send(
			`Deja el cp **<@${msg.author.id}>** o te arranco los webos :)`
		)
	},
}
