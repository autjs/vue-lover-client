let _c2s = {}
function reg(name) {
    _c2s[name] = require('./block/' + name).default
}

reg('chat')
reg('login')
reg('chatMsg')
reg('register')
reg('mineWorks')
reg('recommend')
reg('deleteWork')
reg('getUserById')
reg('publishWork')
reg('loginByToken')
reg('saveUserInfo')
reg('saveUserPortrait')

module.exports = _c2s