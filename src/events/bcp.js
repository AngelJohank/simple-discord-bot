module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(msg) {
		if (msg.author.bot || !/\b(bcp)\b/i.test(msg.content)) return

		await msg.channel.send('escuché bcp B)?')
	},
}
