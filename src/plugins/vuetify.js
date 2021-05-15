import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import MyIcon from "@/icons/MyIcon";

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
        info: '#FF5500',
        success: '#4CAF50',
        warning: '#DBBB00',
        white: '#ffffff',
        dev: '#000',
        admin: '#fccf03',
        moderator: '#8403fc',
        member: '#c6c6c6',
        eSports: '#0362fc',
        airsoft: '#00a125',
        prospect: '#05ff3f',
        gaming: '#B8B8B5',
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
        info: '#FF5500',
        success: '#4CAF50',
        warning: '#DBBB00',
        white: '#ffffff',
        dev: '#000',
        admin: '#fccf03',
        moderator: '#8403fc',
        member: '#c6c6c6',
        eSports: '#0362fc',
        airsoft: '#00a125',
        prospect: '#05ff3f',
        gaming: '#B8B8B5',
        default: '#FF5500'
      }
    }
  },
  icons: {
    iconfont: 'fa',
    'my-icon': {
      component: MyIcon
    }
  },
});
