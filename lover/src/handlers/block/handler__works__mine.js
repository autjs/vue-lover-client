
/**
 * 接收到我的作品列表
 * @param {数据管理者} ctrl 
 * @param {接收到的数据} data 
 */
function Execute(ctrl,data) {
    console.log('收到我的作品列表');
    ctrl.commit('CONCAT_WORKS', data.data);
}

module.exports = Execute;