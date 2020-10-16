'use strict';
import store from './../store';
import router from './../router';
import Vue from 'vue';
import Axios from 'axios';

let config = {
    baseURL: process.env.VUE_APP_REMOTE_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept-Language': store.getters['locale/getLocale'],
        Accept: 'application/json',
        Authorization: {
            toString() {
                return `Bearer ${store.getters['auth/accessToken']}`;
            }
        }
    }
};

const axios = Axios.create(config);

axios.interceptors.request.use(
    function (config) {
        // Do something with request data
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axios.interceptors.response.use(
    function (response) {
        // Do something with response data
        return response;
    },
    function (error) {
        // Do something with response error
        switch (error.response.status) {
            case 401:
                store.commit('auth/UNSET_AUTH');
                return router.push({name: 'login'});
            case 403:
                return router.push({name: 'permission-denied'});
            case 404:
                return router.push({name: 'not-found'});
            case 500:
                return router.push({name: 'server-error'});
            case 503:
                return router.push({
                    name: 'service-unavailable',
                    params: {message: error.response.data.message || ''}
                });
        }
        return Promise.reject(error);
    }
);

Plugin.install = function (Vue) {
    Vue.axios = axios;
    window.axios = axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return axios;
            }
        },
        $axios: {
            get() {
                return axios;
            }
        }
    });
};

Vue.use(Plugin);

export default axios;
