module.exports = {
    // 登录
    'login_suc': require('./block/login/success').default,
    'login_unr': require('./block/login/unreg').default,
    'login_err': require('./block/login/err').default,
    // 注册
    'register_suc': require('./block/register/success').default,
    'register_alr': require('./block/register/alreg').default,
    'register_err': require('./block/register/err').default,
    // 推荐列表
    'recommend_suc': require('./block/recommend/suc').default,
    'recommend_err': require('./block/recommend/err').default,
    
    'tokenLogin_suc': require('./block/tokenLogin/success').default,
    'tokenLogin_err': require('./block/tokenLogin/err').default,

    'publishWork_suc': require('./block/publishWork/suc').default,
    'publishWork_err': require('./block/publishWork/err').default,

    'mineWorks_err': require('./block/userWorks/err').default,
    'mineWorks_suc': require('./block/userWorks/suc').default,

    'chat_err': require('./block/chat/err').default,
    'chat_suc': require('./block/chat/suc').default,

    'getUserById_err': require('./block/getUserById/err').default,
    'getUserById_suc': require('./block/getUserById/suc').default,

    'chatMsg_suc':  require('./block/chatMsg/suc').default,
    'chatMsg_err':  require('./block/chatMsg/err').default,

    'saveUserPortrait_suc':  require('./block/saveUserPortrait/suc').default,
    'saveUserPortrait_err':  require('./block/saveUserPortrait/err').default,
}