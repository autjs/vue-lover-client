export default {
    // socket ...
    c2s: require('./protocol/c2s/c2s'),
    // vuex ... 外部设置
    data: null,
    // storage
    storage: require('./storage/localStorage'),
    // router
    router: null
}