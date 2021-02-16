import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

Vue.use(Router);
const router = new Router({
    mode: 'hash',
    routes: [
        //Home
        {
            path: '/',
            name: 'home',
            component: () => import('./views/HomeIndex')
        },
        {
            path: '/impressum',
            name: 'impressum',
            meta: {auth: false, permission: null},
            component: () => import('./views/impressum')
        },
        {
            path: '/airsoft',
            name: 'airsoft',
            meta: {auth: false, permission: null},
            component: () => import('./views/airsoft')
        },
        {
            path: '/gaming',
            name: 'gaming',
            meta: {auth: false, permission: null},
            component: () => import('./views/gaming')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            meta: {auth: true, permission: null},
            component: () => import('./views/dashboard')
        },
        {
            path: '/management/users',
            name: 'management-users',
            meta: {auth: true, permission: 'users.index'},
            component: () => import('./views/management/users/index')
        },
        {
            path: '/management/users/:userId/edit',
            name: 'management-users-edit',
            props: true,
            meta: {auth: true, permission: 'users.update'},
            component: () => import('./views/management/users/edit')
        },
        {
            path: '/management/permissions',
            name: 'management-permissions',
            meta: {auth: true, permission: 'permissions.index'},
            component: () => import('./views/management/permissions/index')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/LoginForm')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/RegisterForm')
        },
        //Static Pages
        {
            path: '/permission-denied',
            name: 'permission-denied',
            meta: {auth: false, permission: null},
            component: () => import('./views/static/PermissionDenied')
        },
        {
            path: '/server-error',
            name: 'server-error',
            meta: {auth: false, permission: null},
            component: () => import('./views/static/ServerError')
        },
        {
            path: '/service-unavailable',
            name: 'service-unavailable',
            props: true,
            meta: {auth: false, permission: null},
            component: () => import('./views/static/ServiceUnavailable')
        },
        {
            path: '/not-found',
            name: 'not-found',
            meta: {auth: false, permission: null},
            component: () => import('./views/static/NotFound')
        },
        //Redirect zur 404 bei unbekannten / nicht gültigen Routes
        {
            path: '*',
            meta: {auth: false, permission: null},
            component: () => import('./views/static/NotFound')
        }
    ]
});

router.beforeEach((to, from, next) => {
    const auth = store.getters['auth/isAuth'];
    const permissions = store.getters['auth/permissions'];
    if (to.meta.auth && !auth) {
        return next({name: 'login'});
    } else {
        if (to.meta.permission) {
            if (permissions.some(p => p.name === to.meta.permission)) {
                return next();
            } else {
                return next({name: 'permission-denied'});
            }
        }
        return next();
    }
});
router.afterEach(() => {
    window.scrollTo(0,0);
})

export default router;
