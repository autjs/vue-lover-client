import mutations from './mutations'
import actions from './actions'
import getters from './getters'


export default {
    namespaced:true,
    state: {
        worksSize:0,
        works: {}, // {id: Work}
        work: function(){
            return {
                id: '',
                uid: '',
                time: '',
                mood: '',
                photo: '',
            }
        }
    },
    mutations,
    actions,
    getters
  }

  