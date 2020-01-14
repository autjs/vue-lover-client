/**
 * 收到聊天列表
 * @param {数据管理者} ctrl 
 * @param {接收到的数据} data 
 */
function Execute(ctrl,data) {
    console.log('收到角色信息', data);
    ctrl.commit('SET__USER', data.data);
    // ctrl.commit('DELETE_PHOTO', data.id);
    // console.log(ctrl, data);
}

module.exports = Execute;