const state = {
    navigationItemDrawer: false,
};

const getters = {
    navigationItemDrawer: state => state.navigationItemDrawer,
};

const mutations = {
    SET_NAVIGATION_ITEM_DRAWER(state, isActive) {
        state.navigationItemDrawer = isActive;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations
};
