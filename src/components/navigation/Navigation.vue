<template>
  <div>
    <navigation-bar
      @toggle-menu="toggleMenu"
      :show-navigation-drawer="showNavigationDrawer"
    />
    <navigation-drawer
      v-if="showNavigationDrawer"
      v-model="showMenu"
      @toggle-menu="toggleMenu"
    />
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
    ...mapGetters('auth', ['user', 'isAuth']),
    showNavigationDrawer() {
      return this.$route.meta.group === 'management'
    }
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