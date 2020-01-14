/**
 * 推荐列表
 * @param {数据管理者} ctrl 
 * @param {接收到的数据} data 
 */
function Execute(ctrl,data) {
    let arr = data.arr;
    console.log('收到推荐列表', data);
    ctrl.commit('ADD_RECOMMEND', arr);
}

module.exports = Execute;