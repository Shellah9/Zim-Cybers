 {cmd , commands} = require('../config')
const {cmd,commands} = require('../command')
const { fetchjson } = require('../lib/function')
cmd({
    pattern: "ai",
    desc: "ai chat",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

  let data = await fetchjson('http://chatgpt https://prabath--md-official.vercel.app/api/gptv1?q=${q}')
  return reply(`${data.data}`)
}catch{(e){
console.log(e)
  reply('${e}')

}
      })

