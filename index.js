const mineflayer = require('mineflayer')

const options = {
    host: 'mc.hypixel.net',
    username: process.argv[2],
    password: process.argv[3]
}

const bot = mineflayer.createBot(options)
var client

bot.on('spawn', () => { console.log(`Successfully connected to ${options.host} as ${bot.username}`) })

bot.on('message', msg => {
    let text = msg.getText()
    if (text.includes("❤") && text.includes("❈") && text.includes("✎")) return //Ignore action bar 
    if (text.includes("has invited you to join their party!")) {
        if (text.includes("]")) client = text.substring(text.indexOf("]") + 2, text.indexOf("has") - 1)
        else client = text.substring(0, text.indexOf("has") - 1)
        bot.chat(`/p accept ${client}`)
        console.log(`Joined ${client}'s party`)
        setTimeout(() => {
            bot.chat(`/p leave`)
            console.log(`Left ${client}'s party`)
        }, 5000)
    }
})