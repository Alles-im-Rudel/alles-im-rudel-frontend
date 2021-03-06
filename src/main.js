import Vue from 'vue';
import App from './App.vue';
import router from './plugins/router';
import Dates from '@/mixins/Dates';
import vuetify from './plugins/vuetify';
import store from './store';
import Bool from '@/mixins/Bool';
import PushRouteTo from './mixins/PushRouteTo';
import VueMeta from 'vue-meta';
import VueAnimations from 'vue-animations';
import Vue2Editor from 'vue2-editor';
import VueMask from 'v-mask';
import VueJsonLD from 'vue-jsonld';
import 'vue2-editor/dist/vue2-editor.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.snow.css';
import '@babel/polyfill';
import '@fortawesome/fontawesome-free/css/all.css';
import './plugins/axios';
import './plugins/base';
import './plugins/dayjs';

let app = null;

Vue.mixin(Dates);
Vue.mixin(Bool);
Vue.mixin(PushRouteTo);

Vue.use(Vue2Editor);
Vue.use(VueMeta);
Vue.use(VueMask, {
  placeholders: {
    F: /[A-Z]/,
    N: /[A-Z,\d]/,
  }
});
Vue.use(VueJsonLD);

Vue.component('VueAnimation', VueAnimations.VueAnimation);

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
    render: h => h(App)
  }).$mount('#app');
}

export default app;
