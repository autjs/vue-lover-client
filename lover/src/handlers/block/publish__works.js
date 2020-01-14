/**
 * 
 * @param {数据管理者} ctrl 
 * @param {接收到的数据} data 
 */
function Execute(ctrl,data) {
    console.log('上传作品成功');
    ctrl.commit('ADD_WORKS', data.data);
}

module.exports = Execute;