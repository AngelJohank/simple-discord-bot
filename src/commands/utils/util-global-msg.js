const fs = require('fs')
const util = require('util')
const path = require('path')
const fsExists = util.promisify(fs.exists)
const fsMkDir = util.promisify(fs.mkdir)

const fileDir = path.join(process.cwd(), './cache/g-msg.json')

// Send msg
const sendglobalmsg = async (interaction) => {
	const cacheExists = await fsExists('cache')

	// If cache dir does not exists
	if (!cacheExists) {
		createFile(interaction, 'hello world')
	}

	// If cache dir exists
	if (cacheExists) {
		fs.readFile(fileDir, 'utf-8', async (e, r) => {
			const content = JSON.parse(r).content
			await interaction.reply(content)
		})
	}
}

// Save msg
const saveglobalmsg = async (interaction, input) => {
	const cacheExists = await fsExists('cache')

	// If cache dir does not exists
	if (!cacheExists) {
		createFile(interaction, input)
	}

	// If cache dir exists
	if (cacheExists) {
		const model = JSON.stringify({ content: input, time: Date.now() })
		fs.writeFile(fileDir, model, async (e) => {
			if (e) console.error(e)
			await interaction.reply('mensaje guardado :>')
		})
	}
}

// Create File
const createFile = async (interaction, content) => {
	await fsMkDir('cache')
	const genesis = JSON.stringify({ content: content, time: Date.now() })
	fs.writeFile(fileDir, genesis, async () => {
		await interaction.reply(content)
	})
}

module.exports = {
	sendglobalmsg,
	saveglobalmsg,
}
