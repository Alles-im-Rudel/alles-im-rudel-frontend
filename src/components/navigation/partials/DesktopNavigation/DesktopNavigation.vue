<template>
  <div class="d-flex align-center">
    <component
      :is="getComponent(navigationItem)"
      v-for="(navigationItem, index) in navigation"
      :key="index"
      :item="navigationItem"
    />

    <v-divider
      vertical
      class="mx-1"
    />

    <NavigationAuthButtons />
  </div>
</template>

<script>
import navigation from '@/constants/navigation';
import DesktopNavigationButton
  from '@/components/navigation/partials/DesktopNavigation/partials/DesktopNavigationButton.vue';
import DesktopNavigationMenu
  from '@/components/navigation/partials/DesktopNavigation/partials/DesktopNavigationMenu.vue';
import NavigationAuthButtons from '@/components/navigation/partials/NavigationAuthButtons.vue';

export default {
  components: {NavigationAuthButtons},
  data() {
    return {
      navigation: navigation
    };
  },
  methods: {
    getComponent(navigationItem) {
      return navigationItem.children && navigationItem.children.length > 0
        ? DesktopNavigationMenu
        : DesktopNavigationButton;
    }
  }
};
</script>
