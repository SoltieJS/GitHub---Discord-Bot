//⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ C O N S T S ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓

const {
    MessageEmbed,
    MessageActionRow,
    MessageSelectMenu
} = require("discord.js");
const client = require("../../index");

//⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ C O M M A N D ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓

module.exports = {
    name: "credits",
    aliases: ["credit", "creator"],
    description: "Show all the credits of the bot.",
    usage: `${client.config.prefix}credits`,
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle(`📃 **Credits**`)
            .addFields([{
                    name: "🐈‍⬛ GitHub",
                    value: "[Clique Aqui](https://github.com/SoltieJS)"
                },
                {
                    name: "🫐 Discord",
                    value: `<@361279687701561354> or soltie#0822 (ID : 361279687701561354)`
                },
            ])
            .setColor("#ff8080")
            .setFooter(`🧑‍💻 Thanks for the support and attention.`)

            message.channel.send({ embeds: [embed] });
    }
}