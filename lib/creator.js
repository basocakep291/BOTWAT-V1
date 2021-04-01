let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  this.sendContact(m.chat, '6285157339602', 'Andi', m)
}
handler.help = ['Andi', 'Itsmeandii']
handler.tags = ['IG:andibasoamirullah_']

handler.command = /^(owner|creator)$/i

module.exports = handler
