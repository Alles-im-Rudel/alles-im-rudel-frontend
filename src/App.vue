<template>
  <v-app>
    <span :class="bgClass" />
    <navigation />
    <v-main>
      <confirm-modal ref="confirm" />
      <alert-modal ref="alert" />
      <snackbar-component ref="snackbar" />
      <router-view class="effects fade-in-main" />
      <social-footer />
    </v-main>
  </v-app>
</template>
<script>
import ConfirmModal from './components/dialogs/ConfirmModal';
import AlertModal from './components/dialogs/AlertModal';
import Snackbar from './components/dialogs/Snackbar';
import Navigation from "./components/navigation/Navigation";
import SocialFooter from './components/footer/SocialFooter';

export default {
  name: 'App',
  components: {
    'alert-modal': AlertModal,
    'confirm-modal': ConfirmModal,
    'snackbar-component': Snackbar,
    'navigation': Navigation,
    'social-footer': SocialFooter
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
  },
  computed: {
    currentRouteGroup() {
      return this.$route.meta.group
    },
    bgClass() {
      switch (this.currentRouteGroup) {
        case 'airsoft':
          return 'bg-airsoft'
        case 'gaming':
          return 'bg-gaming'
        default:
          return 'bg'
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.bg {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: url('./assets/backgrounds/blank.jpg') no-repeat center center;
  background-size: cover;
  transform: scale(1.1);
}

.bg-airsoft {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: url('/assets/backgrounds/airsoft.jpg') no-repeat center center;
  background-size: cover;
  transform: scale(1.1);
}

.bg-gaming {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: url('/assets/backgrounds/e-sports.jpg') no-repeat center center;
  background-size: cover;
  transform: scale(1.1);
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
