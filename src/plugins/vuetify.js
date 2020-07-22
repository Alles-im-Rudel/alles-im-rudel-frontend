import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);
export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#191919',
                secondary: '#4A4A4A',
                muted: '#FFF999',
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
