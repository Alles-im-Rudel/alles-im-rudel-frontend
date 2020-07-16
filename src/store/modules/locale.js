import app from '../../main';
import axios from '../../plugins/axios';
import dayjs from "dayjs";

const state = {
    locale: localStorage.getItem('locale') || process.env.VUE_APP_I18N_LOCALE
};

const getters = {
    getLocale: state => state.locale
};

const mutations = {
    SET_LOCALE(state, locale) {
        state.locale = locale;
        app.$i18n.locale = locale;
        dayjs.locale(locale);
        app.$vuetify.lang.current = locale;
        localStorage.setItem('locale', locale);
    }
};

const actions = {
    setLocale({ commit }, locale) {
        commit('SET_LOCALE', locale);
        axios.post('change-locale', { locale }).then(() => {
            location.reload();
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
