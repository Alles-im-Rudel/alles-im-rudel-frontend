const state = {
  levels: []
};

const getters = {
  levels: (state) => state.levels
};

const mutations = {
  SET_LEVELS(state, levels) {
    state.levels = levels;
  }
};

const actions = {
  getLevels({ commit }) {
    return new Promise((resolve, reject) => {
      window.axios
        .get('levels')
        .then((response) => {
          commit('SET_LEVELS', response.data.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
