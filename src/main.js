import '@babel/polyfill';
import '@fortawesome/fontawesome-free/css/all.css';
import './plugins/axios';
import './plugins/base';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Dates from '@/mixins/Dates';
import vuetify from './plugins/vuetify';
import './plugins/dayjs'
import i18n from './i18n'
import store from './store'
import Effects from "@/mixins/Effects";
import "@/style/effects.scss";

let app = null;

Vue.mixin(Dates);
Vue.mixin(Effects);

if (store.getters['auth/isAuth'] && !store.getters['auth/user']) {
    Promise.all([
        store.dispatch('auth/getAuth'),
        store.dispatch('level/getLevels'),
    ]).finally(() => mountApp());
} else {
    mountApp();
}

function mountApp() {
    app = new Vue({
        router,
        store,
        vuetify,
        i18n,
        render: h => h(App)
    }).$mount('#app');
}

export default app;
