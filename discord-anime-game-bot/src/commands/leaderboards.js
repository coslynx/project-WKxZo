const Discord = require('discord.js');
const { fetchDataFromDatabase, formatLeaderboardData } = require('../utils/helpers');

module.exports = {
  name: 'leaderboards',
  description: 'Display the leaderboards of the top users with the most powerful characters',
  execute(message, args) {
    try {
      const leaderboardData = fetchDataFromDatabase('leaderboards'); // Fetch leaderboard data from the database
      const formattedData = formatLeaderboardData(leaderboardData); // Format the data for display

      const leaderboardEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Leaderboards')
        .setDescription('Top Users with Powerful Characters');

      formattedData.forEach((user, index) => {
        leaderboardEmbed.addField(`${index + 1}. ${user.username}`, `Power Level: ${user.powerLevel}`);
      });

      message.channel.send({ embeds: [leaderboardEmbed] });
    } catch (error) {
      console.error('Error displaying leaderboards:', error);
      message.reply('An error occurred while displaying the leaderboards. Please try again later.');
    }
  },
};