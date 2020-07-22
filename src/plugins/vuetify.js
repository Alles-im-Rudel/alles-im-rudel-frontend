import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);
export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#5b5b5b',
                secondary: '#c6c6c6',
                muted: '#fff697',
                accent: '#000000',
                error: '#F44336',
                info: '#FF5500',
                success: '#4CAF50',
                warning: '#DBBB00',
                white: '#ffffff'
            },
            dark: {
                primary: '#FF5500',
                secondary: '#FFF100',
                accent: '#000000',
                error: '#F44336',
                info: '#FF5500',
                success: '#4CAF50',
                warning: '#DBBB00'
            }
        }
    }
});
