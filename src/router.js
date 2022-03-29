import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    /*
     * Public
     */
    {
      path: '/',
      name: 'home',
      meta: {group: 'home',},
      component: () => import('./views/home')
    },
    {
      path: '/branches/airsoft',
      name: 'airsoft',
      meta: {group: 'branch', auth: false, permission: null},
      component: () => import('./views/branches/airsoft/Airsoft')
    },
    {
      path: '/branches/e-sports',
      name: 'esports',
      meta: {group: 'branch', auth: false, permission: null},
      component: () => import('./views/branches/esports/Esports')
    },
    {
      path: '/join',
      name: 'join',
      meta: {group: 'join', auth: false, permission: null},
      component: () => import('./views/join')
    },
    {
      path: '/login',
      name: 'login',
      meta: {group: 'login'},
      component: () => import('./views/login/Login')
    },

    /*
     *  Private
     */
    {
      path: '/calendar',
      name: 'calendar',
      meta: {group: 'profile', auth: true, permission: null},
      component: () => import('./views/calendar')
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

    /*
     * Management
     */
    {
      path: '/management/users',
      name: 'management-users',
      meta: {group: 'management', auth: true, permission: 'users.index'},
      component: () => import('./views/management/users/index')
    },
    {
      path: '/management/users/create',
      name: 'management-users-create',
      props: true,
      meta: {group: 'management', auth: true, permission: 'users.store'},
      component: () => import('./views/management/users/create')
    },
    {
      path: '/management/users/:userId/edit',
      name: 'management-users-edit',
      props: true,
      meta: {group: 'management', auth: true, permission: 'users.update'},
      component: () => import('./views/management/users/edit')
    },
    {
      path: '/management/members',
      name: 'management-members',
      meta: {group: 'management', auth: true, permission: 'members.mamage'},
      component: () => import('./views/management/members/Members')
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

    /*
     * Static
     */
    {
      path: '/legal-notice',
      name: 'legal',
      meta: {group: 'home', auth: false, permission: null},
      component: () => import('./views/static/legal')
    },
    {
      path: '/privacy-notice',
      name: 'privacy',
      meta: {group: 'home', auth: false, permission: null},
      component: () => import('./views/static/privacy')
    },
    {
      path: '/articles-of-association',
      name: 'articles-of-association',
      meta: {group: 'home', auth: false, permission: null},
      component: () => import('./views/static/articles-of-association/ArticlesOfAssociation')
    },
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
});

export default router;
