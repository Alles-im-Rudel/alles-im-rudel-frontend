const state = {
  branches: [],
  isLoadingBranches: false
};

const getters = {
  branches: (state) => state.branches,
  isLoadingBranches: (state) => state.isLoadingBranches
};

const mutations = {
  SET_BRANCHES(state, branches) {
    state.branches = branches;
  },
  SET_IS_LOADING_BRANCHES(state, isLoadingBranches) {
    state.isLoadingBranches = isLoadingBranches;
  }
};

const actions = {
  getBranches({commit}) {
    return new Promise((resolve, reject) => {
      if (state.isLoadingBranches || state.branches.length > 0) {
        return;
      }

      commit('SET_IS_LOADING_BRANCHES', true);

      window.axios
        .get('branches')
        .then((response) => {
          commit('SET_BRANCHES', response.data.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          commit('SET_IS_LOADING_BRANCHES', false);
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
