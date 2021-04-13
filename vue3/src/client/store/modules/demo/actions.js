export default {
  setData({
    commit
  }, payload) {
    commit('setUserInfo', payload)
  }
}