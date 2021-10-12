/*

🏡 - Node 16.11.0
🙈 - npm 8.0.0
🫐 - Discord 13.2.0

Please have all of this installed in your computer

*/

//⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ C O N S T S ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓

const { Client, Intents, Collection, MessageEmbed } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
module.exports = client;

//⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ G L O B A L ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓

client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
client.credits = require("./credits.json");

//⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ P R O J E C T ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓

client.on("ready", ready => {
    const name = client.credits.name
    const  id = client.credits.id
    const discord = client.credits.discord_tag
    console.log(`****--- Developer Name: ${name} ---***`);
    console.log(`****--- Discord ID: ${id} ---***`);
    console.log(`****--- Discord User: ${discord} ---***`);
})

require("./handler")(client);

client.login(client.config.token);