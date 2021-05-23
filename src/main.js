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
import Bool from "@/mixins/Bool";
import Effects from "@/mixins/Effects";
import PushRouteTo from "./mixins/PushRouteTo";
import "@/style/effects.scss";

import Vue2Editor from 'vue2-editor';

import "vue2-editor/dist/vue2-editor.css";
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.snow.css';

let app = null;

Vue.mixin(Dates);
Vue.mixin(Bool);
Vue.mixin(Effects);
Vue.mixin(PushRouteTo)
Vue.use(Vue2Editor);

if (store.getters['auth/isAuth'] && !store.getters['auth/user']) {
  Promise.all([
    store.dispatch('auth/getAuth'),
    store.dispatch('level/getLevels'),
    store.dispatch('tag/getTags'),
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
