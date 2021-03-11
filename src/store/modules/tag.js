const state = {
  tags: []
};

const getters = {
  tags: (state) => state.tags
};

const mutations = {
  SET_TAGS(state, tags) {
    state.tags = tags;
  }
};

const actions = {
  getTags({commit}) {
    return new Promise((resolve, reject) => {
      window.axios
        .get('tags/all')
        .then((response) => {
          commit('SET_TAGS', response.data.data);
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
