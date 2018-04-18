import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './action'
Vue.use(Vuex)

const state = {
  count: 1
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
})
export default store
// const module = {
//   state,
//   mutations,
//   getters,
//   actions,
// }
// export default new Vuex.Store({
//   modules: { module: module }

// })
