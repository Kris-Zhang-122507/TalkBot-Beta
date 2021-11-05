//const { Interaction } = require("discord.js");
//const ms = require("ms");

//module.exports = {
//    name: "Purge",
//    description: "This command removes messages that are sent within 14 days",
//    userPermissions: ["MANAGE_MESSAGES"],
//    options: [
//        {
//            name: "amount",
//            description: "amount of messages that is going to be deleted",
//           type: "INTEGER",
//            required: true,
//        },
//    ],
//
//    run: async(Client, interaction) => {
//        const amount = interaction.options.getInteger('amount');
//
//        if ( amount > 100) return interaction.followUp({ content: "The maximum amount of messages that can be deleted is 20. This is to prevent mass message deletion.",
//    
//           });
//
//        const messages = await interaction.channel.messages.fetch({
//           limit: amount + 1,
//        });
//
//        const filtered = messages.filter(
//            (message) => Date.now() - message.createdTimestamp < ms("14 days")
//       );
//
//        await interaction.channel.bulkDelete(filtered);
//
//        interaction.channel.send({
//            content: `Deleted ${filtered.size -1} messages`,
//        });
//    },
//};
