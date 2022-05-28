import {
  createStore
} from 'vuex'

import actions from './actions'
import mutations from './mutaitions'
import getters from './getters'

const store = createStore({
  state() {
    return {
      test: "This message for test.If you see me, the state is ok."
    }
  },
  getters,
  mutations,
  actions
})

export default store