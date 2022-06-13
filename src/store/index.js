import {
  createStore
} from 'vuex'

import actions from './actions'
import mutations from './mutaitions'
import getters from './getters'

import T from "@/test/TestData"

const {
  TestDescData,
  TestDetailData,
  TestRankData
} = T

const store = createStore({
  state() {
    return {
      test: "This message for test.If you see me, the state is ok.",
      TestDescData,
      TestDetailData,
      TestRankData
    }
  },
  getters,
  mutations,
  actions
})

export default store