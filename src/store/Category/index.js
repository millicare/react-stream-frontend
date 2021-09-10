import getters from './getter'
import actions from './action'
import mutations from './mutations'

const state = {
  categoryList: []
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
