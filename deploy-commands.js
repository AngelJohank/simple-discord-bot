const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const { clientId, guildId, token } = require('./bot.json')

const fs = require('fs')

// Command handling
const commands = []

const commandFiles = fs
	.readdirSync('./src/commands')
	.filter((file) => file.endsWith('.js'))

commandFiles.forEach((file) => {
	const command = require(`./src/commands/${file}`)
	commands.push(command.data.toJSON())
})

// Publish commands
const rest = new REST({ version: '9' }).setToken(token)

rest
	.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error)

rest
	.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() =>
		console.log('Successfully registered global application commands.')
	)
	.catch(console.error)
