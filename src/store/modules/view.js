const state = {
  homeView: {},
  airsoftView: {},
  gamingView: {}
};

const getters = {
  homeView: (state) => state.homeView,
  airsoftView: (state) => state.airsoftView,
  gamingView: (state) => state.gamingView,
};

const mutations = {
  SET_HOME_VIEW(state, homeView) {
    state.homeView = homeView;
  },
  SET_AIRSOFT_VIEW(state, airsoftView) {
    state.airsoftView = airsoftView;
  },
  SET_GAMING_VIEW(state, gamingView) {
    state.gamingView = gamingView;
  },
};

const actions = {
  getHomeView({commit}) {
    return new Promise((resolve, reject) => {
      window.axios
        .get('views/1')
        .then((response) => {
          commit('SET_HOME_VIEW', response.data.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getAirsoftView({commit}) {
    return new Promise((resolve, reject) => {
      window.axios
        .get('views/2')
        .then((response) => {
          commit('SET_AIRSOFT_VIEW', response.data.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getGamingView({commit}) {
    return new Promise((resolve, reject) => {
      window.axios
        .get('views/3')
        .then((response) => {
          commit('SET_GAMING_VIEW', response.data.data);
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
