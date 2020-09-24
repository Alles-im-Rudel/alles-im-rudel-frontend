import axios from "../../plugins/axios";

const state = {
    isAuth: !!localStorage.getItem('is_auth'),
    user: null,
    permissions: [],
    isLoadingAuth: false,
};

const getters = {
    isAuth: state => state.isAuth,
    user: state => state.user,
    permissions: state => state.permissions,
    isLoadingAuth: state => state.isLoadingAuth,
};

const mutations = {
    SET_USER(state, userData) {
        state.user = userData
        localStorage.setItem('user', JSON.stringify(userData))
    },
    SET_IS_AUTH(state, isAuth) {
        state.isAuth = isAuth;
        localStorage.setItem('is_auth', isAuth);
    },
    UNSET_AUTH(state) {
        state.isAuth = false;
        state.user = null;
        state.permissions = null;
        localStorage.removeItem('is_auth');
    },
    SET_PERMISSIONS(state, permissions) {
        state.permissions = permissions
    },
    SET_IS_LOADING_AUTH(state, isLoadingAuth) {
        state.isLoadingAuth = isLoadingAuth;
    }
};

const actions = {
    login({commit}, loginForm) {
        commit('SET_IS_LOADING_AUTH', true);
        this.isLoading = true;
        return new Promise((resolve, reject) => {
            axios.get('/sanctum/csrf-cookie').then(() => {
                axios.post('login', loginForm)
                    .then(() => {
                        axios.get('api/auth')
                            .then(response => {
                                commit('SET_USER', response.data.user);
                                commit('SET_PERMISSIONS', response.data.permissions);
                                commit('SET_IS_AUTH', true);
                                resolve(response);
                            })
                    })
                    .catch(error => {
                        commit('UNSET_AUTH');
                        reject(error);
                    }).finally(() => {
                    commit('SET_IS_LOADING_AUTH', false);
                });
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
    getUser({commit}) {
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
