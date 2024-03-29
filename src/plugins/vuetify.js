import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#231f21',
        darkGrey: '#495056',
        greyBlue: '#596571',
        secondary: '#c6c6c6',
        yellow: '#fff697',
        black: '#010101',
        error: '#F44336',
        info: '#4FC3F7',
        success: '#4CAF50',
        warning: '#DBBB00',
        white: '#ffffff',
        dev: '#000',
        admin: '#fccf03',
        moderator: '#8403fc',
        member: '#c6c6c6',
        gaming: '#0362fc',
        airsoft: '#00a125',
        prospect: '#05ff3f',
        default: '#FF5500',
        liked: '#0362fc',
      },
      dark: {
        primary: '#231f21',
        darkGrey: '#495056',
        greyBlue: '#596571',
        secondary: '#c6c6c6',
        yellow: '#fff697',
        black: '#010101',
        error: '#F44336',
        info: '#4FC3F7',
        success: '#4CAF50',
        warning: '#DBBB00',
        white: '#ffffff',
        dev: '#000',
        admin: '#fccf03',
        moderator: '#8403fc',
        member: '#c6c6c6',
        gaming: '#0362fc',
        airsoft: '#00a125',
        prospect: '#05ff3f',
        default: '#FF5500'
      }
    }
  },
  icons: {
    iconfont: 'fa',
    values: {
      allesimrudel: {
        component: () => import('./../icons/AllesImRudel')
      }
    }
  },
});
