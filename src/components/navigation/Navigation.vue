<template>
  <div>
    <navigation-bar @toggle-menu="toggleMenu" />
    <navigation-drawer v-model="showMenu" @toggle-menu="toggleMenu" />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import NavigationBar from '@/components/navigation/NavigationBar';
import NavigationDrawer from '@/components/navigation/NavigationDrawer';

export default {
  components: {
    'navigation-bar': NavigationBar,
    'navigation-drawer': NavigationDrawer
  },
  computed: {
    ...mapGetters('auth', ['user', 'isAuth'])
  },
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    ...mapActions('auth', ['logout']),
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>