<template>
  <div class="mobile-navigation">
    <div class="mobile-navigation__buttons">
      <MobileNavigationButton
        :item="startItem"
        class="my-1"
      />

      <div
        v-for="(navigationItem, index) in navigation"
        :key="index"
      >
        <div class="px-10">
          <v-divider />
        </div>

        <component
          :is="getComponent(navigationItem)"
          :item="navigationItem"
          class="my-1"
        />
      </div>
    </div>

    <div class="mobile-navigation__auth-buttons">
      <NavigationAuthButtons />
    </div>
  </div>
</template>

<script>
import navigation from '@/constants/navigation';
import MobileNavigationButton
  from '@/components/navigation/partials/MobileNavigation/partials/MobileNavigationButton.vue';
import MobileNavigationMenu from '@/components/navigation/partials/MobileNavigation/partials/MobileNavigationMenu.vue';
import NavigationAuthButtons from '@/components/navigation/partials/NavigationAuthButtons.vue';

export default {
  components: {
    NavigationAuthButtons,
    MobileNavigationButton},
  data() {
    return {
      navigation: navigation,
      startItem: {
        name: 'Startseite',
        route: 'home'
      }
    };
  },
  methods: {
    getComponent(navigationItem) {
      return navigationItem.children && navigationItem.children.length > 0
        ? MobileNavigationMenu
        : MobileNavigationButton;
    }
  }
};
</script>

<style lang="scss">
.mobile-navigation {
  &__buttons {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }

  &__auth-buttons {
    position: absolute;
    bottom: 5%;
    right: 10%;
  }
}
</style>
