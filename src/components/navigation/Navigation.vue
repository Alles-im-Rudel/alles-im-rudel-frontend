<template>
  <div>
    <navigation-bar />

    <!--
    <navigation-bar
      @toggle-menu="toggleMenu"
      :show-navigation-drawer="showNavigationDrawer"
    />
    <navigation-drawer
      v-if="showNavigationDrawer"
      v-model="showMenu"
      @toggle-menu="toggleMenu"
    />
    -->
  </div>
</template>

<script>
import NavigationBar from '@/components/navigation/NavigationBar';
// import NavigationDrawer from '@/components/navigation/NavigationDrawer';

export default {
  components: {
    'navigation-bar': NavigationBar,
    // 'navigation-drawer': NavigationDrawer
  },
  computed: {
    /*showNavigationDrawer() {
      return this.$route.meta.group === 'management'
    }*/
  },
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>