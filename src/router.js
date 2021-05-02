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
      meta: {group: 'home',},
      component: () => import('./views/home')
    },
    {
      path: '/impressum',
      name: 'impressum',
      meta: {group: 'home', auth: false, permission: null},
      component: () => import('./views/impressum')
    },
    {
      path: '/dataProtection',
      name: 'dataProtection',
      meta: {group: 'home', auth: false, permission: null},
      component: () => import('./views/dataProtection')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {group: 'home', auth: true, permission: 'dashboard.index'},
      component: () => import('./views/home/dashboard')
    },
    {
      path: '/news',
      name: 'news',
      meta: {group: 'home', auth: false, permission: null},
      component: () => import('./views/home/news')
    },
    {
      path: '/calendar',
      name: 'calendar',
      meta: {group: 'home', auth: false, permission: null},
      component: () => import('./views/home/calendar')
    },
    {
      path: '/members',
      name: 'members',
      meta: {group: 'home', auth: false, permission: null},
      component: () => import('./views/home/members')
    },
    {
      path: '/airsoft',
      name: 'airsoft',
      meta: {group: 'airsoft', auth: false, permission: null},
      component: () => import('./views/airsoft')
    },
    {
      path: '/airsoft/news',
      name: 'airsoft-news',
      meta: {group: 'airsoft', auth: false, permission: null},
      component: () => import('./views/airsoft/news')
    },
    {
      path: '/gaming',
      name: 'gaming',
      meta: {group: 'gaming', auth: false, permission: null},
      component: () => import('./views/gaming')
    },
    {
      path: '/gaming/news',
      name: 'gaming-news',
      meta: {group: 'gaming', auth: false, permission: null},
      component: () => import('./views/gaming/news')
    },
    {
      path: '/gaming/lol',
      name: 'gaming-lol',
      meta: {group: 'gaming', auth: false, permission: null},
      component: () => import('./views/gaming/lol')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {group: 'profile', auth: true, permission: null},
      component: () => import('./views/profile')
    },
    {
      path: '/profile/:username',
      name: 'profile-show',
      props: true,
      meta: {group: 'home', auth: false, permission: null},
      component: () => import('./views/profile/show')
    },
    {
      path: '/management/users',
      name: 'management-users',
      meta: {group: 'management', auth: true, permission: 'users.index'},
      component: () => import('./views/management/users/index')
    },
    {
      path: '/management/users/:userId/edit',
      name: 'management-users-edit',
      props: true,
      meta: {group: 'management', auth: true, permission: 'users.update'},
      component: () => import('./views/management/users/edit')
    },
    {
      path: '/management/permissions',
      name: 'management-permissions',
      meta: {group: 'management', auth: true, permission: 'permissions.index'},
      component: () => import('./views/management/permissions/index')
    },
    {
      path: '/management/clash',
      name: 'management-clash',
      meta: {group: 'management', auth: true, permission: 'clash.update'},
      component: () => import('./views/management/clash')
    },
    {
      path: '/login',
      name: 'login',
      meta: {group: 'home'},
      component: () => import('./views/LoginForm')
    },
    {
      path: '/register',
      name: 'register',
      meta: {group: 'home'},
      component: () => import('./views/RegisterForm')
    },
    //Static Pages
    {
      path: '/permission-denied',
      name: 'permission-denied',
      meta: {group: 'static', auth: false, permission: null},
      component: () => import('./views/static/PermissionDenied')
    },
    {
      path: '/server-error',
      name: 'server-error',
      meta: {group: 'static', auth: false, permission: null},
      component: () => import('./views/static/ServerError')
    },
    {
      path: '/service-unavailable',
      name: 'service-unavailable',
      props: true,
      meta: {group: 'static', auth: false, permission: null},
      component: () => import('./views/static/ServiceUnavailable')
    },
    {
      path: '/not-found',
      name: 'not-found',
      meta: {group: 'static', auth: false, permission: null},
      component: () => import('./views/static/NotFound')
    },
    //Redirect zur 404 bei unbekannten / nicht gültigen Routes
    {
      path: '*',
      meta: {group: 'static', auth: false, permission: null},
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
  window.scrollTo(0, 0);
})

export default router;
