import axios from "../../plugins/axios";

const state = {
    isAuth: !!localStorage.getItem('is_auth'),
    user: null,
    permissions: null,
    navigationItems: null,
};

const getters = {
    isAuth: state => state.isAuth,
    user: state => state.user,
    permissions: state => state.permissions,
    navigationItems: state => state.navigationItems,
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
    SET_NAVIGATION_ITEMS(state, navigationItems) {
        state.navigationItems = navigationItems;
    }
};

const actions = {
    login({commit}, loginForm) {
        this.isLoading = true;
        axios.get('/sanctum/csrf-cookie').then(() => {
                axios.post('login', loginForm)
                    .then(() => {
                            axios.get('api/auth')
                                .then(response => {
                                    commit('SET_USER', response.data.data);
                                    /*commit('SET_PERMISSIONS', response.data.permissions);
                                    commit('SET_NAVIGATION_ITEMS', response.data.navigation_items);*/
                                    commit('SET_IS_AUTH', true);
                                })
                    })
                    .catch(error => {
                        console.log(error)
                    });
        });
    },
    logout({commit}) {
        axios.post('/logout').then(() => {
            commit('UNSET_AUTH');
            window.location.reload();
        })
    },
    getUser({commit}) {
        return new Promise((resolve, reject) => {
            axios.get('api/auth')
                .then(response => {
                    commit('SET_USER', response.data.data);
                   /* commit('SET_PERMISSIONS', response.data.permissions);
                    commit('SET_NAVIGATION_ITEMS', response.data.navigation_items);*/
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
