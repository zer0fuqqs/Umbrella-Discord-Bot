require("dotenv").config()
const { Client, Collection, Interaction, Intents} = require("discord.js")
const fs = require("fs")

const client = new Client({intents: [Intents.FLAGS.GUILDS]})
client.commands = new Collection()

const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"))

commandFiles.forEach(commandFile => {
    
    const command = require(`./commands/${commandFile}`)
    client.commands.set(command.data.name, command)
})

client.once("ready", () => {
    console.log(`Ready logged in as ${client.user.tag}`)
})


client.on("interactionCreate", async (Interaction) => {
    if (!Interaction.isCommand()) return

    const command = client.commands.get(Interaction.commandName)

    if (command) {
        try {
                await command.execute(Interaction)
        } catch(error) {
            console.error(error)

            if(Interaction.deffered || Interaction.replied) {
                Interaction.editReply("Es ist ein Fehler beim ausführen aufgetreten!")
            } else {
                Interaction.reply("Es ist ein Fehler beim ausführen aufgetreten!")
            }
    }
}
})


client.login(process.env.DISCORD_BOT_TOKEN)