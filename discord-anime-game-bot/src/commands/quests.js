const Discord = require('discord.js');
const quests = require('../../data/quests.json');

module.exports = {
    name: 'quests',
    description: 'View available quests and track your progress.',
    execute(message, args) {
        const user = message.author;

        if (!quests[user.id]) {
            quests[user.id] = [];
        }

        if (args[0] === 'list') {
            let questList = '';
            quests[user.id].forEach((quest, index) => {
                questList += `${index + 1}. ${quest.name} - ${quest.progress}/${quest.goal}\n`;
            });

            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Quests')
                .setDescription(questList);

            return message.channel.send(embed);
        } else if (args[0] === 'complete' && args[1]) {
            const questIndex = parseInt(args[1]) - 1;

            if (isNaN(questIndex) || questIndex < 0 || questIndex >= quests[user.id].length) {
                return message.channel.send('Invalid quest number. Please check the list and try again.');
            }

            const completedQuest = quests[user.id][questIndex];
            completedQuest.progress = completedQuest.goal;

            const embed = new Discord.MessageEmbed()
                .setColor('#00ff00')
                .setDescription(`Congratulations! You have completed the quest: ${completedQuest.name}`);

            return message.channel.send(embed);
        } else {
            return message.channel.send('Invalid command. Please use !quests list to view available quests.');
        }
    },
};