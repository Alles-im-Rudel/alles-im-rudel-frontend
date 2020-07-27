import '@babel/polyfill';
import '@fortawesome/fontawesome-free/css/all.css';
import './plugins/axios';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import './plugins/dayjs'
import i18n from './i18n'
import store from './store'

let app = null;

if (store.getters['auth/isAuth'] && !store.getters['auth/user']) {
  Promise.all([
    store.dispatch('auth/getUser'),
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
