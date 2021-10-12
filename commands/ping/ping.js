//⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ C O N S T S ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓

const {
    MessageEmbed,
    MessageActionRow,
    MessageSelectMenu
} = require("discord.js");
const client = require("../../index");

//⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ C O M M A N D ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓

module.exports = {
    name: "ping",
    aliases: ["pong"],
    description: "Basic ping command",
    usage: `${client.config.prefix}ping`,
    run: async (client, message, args) => {

        const component = (state) => [
            new MessageActionRow().addComponents(
                new MessageSelectMenu()
                .setCustomId('menu')
                .setPlaceholder('Clique aqui para ver as categorias')
                .setDisabled(state)
                .addOptions([{
                        label: 'API Ping',
                        description: 'Veja o ping da API.',
                        emoji: '🏓',
                        value: 'api',
                    },
                    {
                        label: 'BOT Latency',
                        description: 'Latência de envio do bot.',
                        emoji: '🤖',
                        value: 'bot',
                    },
                ])
            )

        ]

        const initialMessage = await message.channel.send({
            content: "> Selecione uma opção abaixo\n> \n> Select an option bellow.",
            components: component(false),
        });

        const filter = (interaction) => interaction.user.id === message.author.id;

        const collector = message.channel.createMessageComponentCollector({
            filter,
            componentType: "SELECT_MENU",
            time: 30000,
        });

        collector.on("collect", (interaction) => {

            let valor = interaction.values[0]
            if (valor === "api") {

                const embed_api = new MessageEmbed()
                    .setTitle(`🏓 **API Ping**`)
                    .addFields([{
                        name: "📡 Ping:",
                        value: `${parseInt(client.ws.ping)}ms`
                    }])
                    .setColor("#ff8080")
                    .setFooter(`🧑‍💻 Code made by Soltie, use ${client.config.prefix}credits to see all info!`)

                interaction.update({ content: "**Don't send the command again, and then enter in API PING option before this collector expires**",
                    embeds: [embed_api]
                });
                return;
            }

            if (valor === "bot") {

                const embed_bot = new MessageEmbed()
                    .setTitle(`🤖 **BOT Latency**`)
                    .addFields([{
                        name: "🛰️ Ping:",
                        value: `${Math.floor(initialMessage.createdAt - message.createdAt)}ms`
                    }])
                    .setColor("#87dbff")
                    .setFooter(`🧑‍💻 Code made by Soltie, use ${client.config.prefix}credits to see all info!`)

                interaction.update({ content: "**Don't send the command again, and then enter in BOT LATENCY option before this collector expires**",
                    embeds: [embed_bot]
                });
                return;
            }
        })

        collector.on("end", () => {
            initialMessage.edit({ content: " ",
                components: component(true)
            })
        })


    }
}