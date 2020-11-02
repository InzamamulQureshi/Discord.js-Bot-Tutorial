exports.run = async(client, message, args) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`You don't have enough permissions to use this command!`) //checks if author has admin perms 
  
  let prefix = await client.db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix === client.config.prefix
  
  if(!args[0]) return message.channel.send(`Prefix cannot be an empty argument`) //checks if arguments is empty
  
  if(args[1]) return message.channel.send(`Prefix cannot be of two arguments`) //checks if prefix is of 1 arguements or 2
  
  if(args[0].length > 3) return message.channel.send(`Prefix cannot be of more than 3 characters`) //checks if prefix is of more than 3 characters
  
  if(args[0] === client.config.prefix) return message.channel.send(`Prefix has been successfully reset`) //prefix reset message
  
  client.db.set(`prefix_${message.guild.id}`, args[0])
  
  message.channel.send(`Prefix has been set to ${args[0]}`) //success message
  
}

exports.help = {
  name: "prefix",
  aliases: ["setprefix"]
}
