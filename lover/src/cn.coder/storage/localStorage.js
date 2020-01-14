module.exports = {
    getToken: function() {
        return localStorage.getItem('tk');
    },
    setToken: function(val) {
        console.log('设置tk: %s', val)
        localStorage.setItem('tk', val)
    },

    setId(id) {
        localStorage.setItem('linkId', id)
    },

    getId() {
        return localStorage.getItem('linkId')
    }
}