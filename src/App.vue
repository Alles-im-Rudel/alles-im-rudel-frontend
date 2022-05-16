<template>
  <v-app>
    <navigation />
    <v-main>
      <confirm-modal ref="confirm" />
      <alert-modal ref="alert" />
      <snackbar ref="snackbar" />
      <Notifications ref="notifications" />
      <router-view />
      <social-footer />
      <cookie-banner />
    </v-main>
  </v-app>
</template>

<script>
import ConfirmModal from './components/dialogs/ConfirmModal';
import AlertModal from './components/dialogs/AlertModal';
import Snackbar from './components/dialogs/Snackbar';
import Navigation from './components/navigation/Navigation';
import SocialFooter from './components/footer/SocialFooter';
import CookieBanner from '@/components/cookies/CookieBanner';
import Notifications from '@/components/notifications/Notifications';

export default {
  name: 'App',
  metaInfo: {
    title: 'Alles im Rudel e.V.',
  },
  components: {
    Notifications,
    CookieBanner,
    AlertModal,
    ConfirmModal,
    Snackbar,
    Navigation,
    SocialFooter
  },
  data() {
    return {
      userNavigation: false,
      sideNavigation: false,
    };
  },
  mounted() {
    this.$root.$confirm = this.$refs.confirm;
    this.$root.$alert = this.$refs.alert;
    this.$root.$snackbar = this.$refs.snackbar;
    this.$root.$notifications = this.$refs.notifications;
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
