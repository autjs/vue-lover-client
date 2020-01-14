/**
 * 验证成功
 * @param data 
 */

function Execute() {
    console.log('登录成功');
    console.log('请求推荐列表');
    this.send({ pid: 1003 })
    console.log('请求我的相册列表')
    this.send({ pid: 1002 })

}

module.exports = Execute;