import axios from "../../plugins/axios";

const state = {
  isAuth: !!localStorage.getItem('isAuth'),
  user: null,
  permissions: [],
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken'),
  tokenExpiresIn: localStorage.getItem('tokenExpiresIn'),
  isLoadingAuth: false,
};

const getters = {
  isAuth: state => state.isAuth,
  user: state => state.user,
  permissions: state => state.permissions,
  isLoadingAuth: state => state.isLoadingAuth,
  accessToken: (state) => state.accessToken,
  refreshToken: (state) => state.refreshToken,
  tokenExpiresIn: (state) => state.tokenExpiresIn,
};

const mutations = {
  SET_USER(state, userData) {
    state.user = userData
  },
  SET_IS_AUTH(state, isAuth) {
    state.isAuth = isAuth;
    localStorage.setItem('isAuth', isAuth);
  },
  UNSET_AUTH(state) {
    state.isAuth = false;
    state.user = null;
    state.permissions = null;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('tokenExpiresIn');
    localStorage.removeItem('isAuth');
  },
  SET_PERMISSIONS(state, permissions) {
    state.permissions = permissions
  },
  SET_IS_LOADING_AUTH(state, isLoadingAuth) {
    state.isLoadingAuth = isLoadingAuth;
  },
  SET_ACCESS_TOKEN(state, accessToken) {
    state.accessToken = accessToken;
    localStorage.setItem('accessToken', accessToken);
  },
  SET_REFRESH_TOKEN(state, refreshToken) {
    state.refreshToken = refreshToken;
    localStorage.setItem('refreshToken', refreshToken);
  },
  SET_TOKEN_EXPIRES_IN(state, tokenExpiresIn) {
    state.tokenExpiresIn = tokenExpiresIn;
    localStorage.setItem('tokenExpiresIn', tokenExpiresIn);
  },
};

const actions = {
  login({commit}, loginForm) {
    commit('SET_IS_LOADING_AUTH', true);
    this.isLoading = true;
    return new Promise((resolve, reject) => {
      axios.post('login', loginForm)
        .then((response) => {
          commit('SET_ACCESS_TOKEN', response.data.tokens.access_token);
          commit('SET_REFRESH_TOKEN', response.data.tokens.refresh_token);
          commit('SET_TOKEN_EXPIRES_IN', response.data.tokens.expires_in);
          commit('SET_USER', response.data.user);
          commit('SET_PERMISSIONS', response.data.permissions);
          commit('SET_IS_AUTH', true);
          resolve(response)
        })
        .catch(error => {
          commit('UNSET_AUTH');
          reject(error);
        }).finally(() => {
        commit('SET_IS_LOADING_AUTH', false);
      });
    });
  },
  register({commit}, registerForm) {
    commit('SET_IS_LOADING_AUTH', true);
    this.isLoading = true;
    return new Promise((resolve, reject) => {
      axios.post('/register', registerForm)
        .then((response) => {
          commit('SET_ACCESS_TOKEN', response.data.tokens.access_token);
          commit('SET_REFRESH_TOKEN', response.data.tokens.refresh_token);
          commit('SET_TOKEN_EXPIRES_IN', response.data.tokens.expires_in);
          commit('SET_USER', response.data.user);
          commit('SET_PERMISSIONS', response.data.permissions);
          commit('SET_IS_AUTH', true);
          resolve(response)
        })
        .catch(error => {
          commit('UNSET_AUTH');
          reject(error);
        }).finally(() => {
        commit('SET_IS_LOADING_AUTH', false);
      });
    });
  },
  logout({commit}) {
    commit('SET_IS_LOADING_AUTH', true);
    axios.post('/logout').then(() => {
      commit('UNSET_AUTH');
      window.location.reload();
    }).finally(() => {
      commit('SET_IS_LOADING_AUTH', false);
    })
  },
  getAuth({commit}) {
    return new Promise((resolve, reject) => {
      axios.get('api/auth')
        .then(response => {
          commit('SET_USER', response.data.user);
          commit('SET_PERMISSIONS', response.data.permissions);
          resolve(response);
        })
        .catch(error => {
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
