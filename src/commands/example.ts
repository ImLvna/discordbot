import { SlashCommandBuilder } from "discord.js";
import { PrefixCommand, SlashCommand } from "../commands";

const prefixCommand = new PrefixCommand({
  name: "prefixCommandName",
  description: "An example prefix command",
  usage: "prefixCommandName",
  aliases: ["prefix"],
  ownerOnly: false,
  callback: (message, args) => {
    message.channel.send("An example slash command!");
  },
});

const slashCommand: SlashCommand = {
  data: new SlashCommandBuilder()
    .setName("slashCommandName")
    .setDescription("An example slash command"),

  callback: (interaction) => {
    interaction.reply("An example slash command!");
  },
};

export default [prefixCommand, slashCommand];

// or if you only have one command in the file,
// export default prefixCommand;
