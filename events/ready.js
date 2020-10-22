module.exports = async (client) => {
  
  console.log(`${client.user.tag} is ready!`)
  
  client.user.setActivity(`Fantasy Code YT`, {
    type: 'STREAMING'
  })
  
} //lets see