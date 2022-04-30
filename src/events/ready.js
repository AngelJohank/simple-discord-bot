module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log('Logged as:', client.user.tag)
		client.user.setPresence({ activities: [{ name: 'jugando mi madagascar GAAA 🐀' }], status: 'online' });
	},
}
