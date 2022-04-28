module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(msg) {
		if (msg.content.toLowerCase().startsWith('-doxme')) {
			await msg.reply(JSON.stringify(msg.author, '', 2))
		}
	}
}