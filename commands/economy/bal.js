const discord = require("discord.js")

exports.run = async(client, message, args) => {
  
  let user = message.mentions.users.first() || message.author;
  let bal = await client.db.get(`money_${user.id}`) //fetches the amount of money user has
  if(!bal) bal = "0" //if bal is null it will show "0"
  
  const embed = new discord.MessageEmbed()
  .setAuthor(user.username + "'s Balance", user.avatarURL({dynamic: true}))
  .setDescription(`${user.username} has ${bal}$ coins!`)
  .setFooter(`Fantasy Code </>`)
  .setColor(`#0ffff`)
  
  message.channel.send(embed).catch(console.log) 
  
}

exports.help = {
  name: "balance",
  aliases: ["bal"]
}
