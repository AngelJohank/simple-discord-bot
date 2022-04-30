module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log('Logged as:', client.user.tag)
		client.user.setPresence({ activities: [{ name: 'madagascar GAAA 🐀' }], status: 'online' });
	},
}
