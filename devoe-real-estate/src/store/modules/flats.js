const state = () => ({
  list: [],
});
const mutations = {
  SET_LIST(state, list) {
    state.list = list;
  },
};
const actions = {
  fetchFlats({ commit }, list) {
    commit("SET_LIST", list);
  },
};
const getters = {
  flatsList(state) {
    return state.list;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
