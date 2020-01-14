export default { 
    getWorksById: state => uid =>  {
        return state.works[uid] || []
    },
    getMineWorks: (state,getters,rootState) => {
        console.log('调用了获取我的作品接口')
        return getters.getWorksById(rootState.user.id)
    }
}