const Telegraf = require('telegraf')
const session = require('telegraf/session')
const config = require('./config')

const bot = new Telegraf(config.token)
bot.use((ctx, next) => {
  const start = new Date()
  return next(ctx).then(() => {
    const ms = new Date() - start
    console.log('Response time %sms', ms)
  })
})
// // Register session middleware
bot.use(session())

bot.start((ctx) => ctx.reply('Sono in funzione!'))
bot.help((ctx) => ctx.reply('Comando aiuto'))
bot.hears('ciao', (ctx) => ctx.reply('ciao!'))
bot.hears('python', (ctx) => ctx.reply('ma sono in Javascript'))
bot.launch()