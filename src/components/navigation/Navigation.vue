<template>
  <div class="navigation">
    <v-app-bar
      class="navigation__app-bar"
      color="primary"
      dark
      app
    >
      <NavigationTitle />

      <v-spacer />

      <div class="navigation-menu align-center d-block d-md-none">
        <div
          class="navigation-menu__mobile-button"
          @click="modalShouldOpen = !modalShouldOpen"
        >
          <div class="navigation-menu__mobile-button-bar" />
          <div class="navigation-menu__mobile-button-bar" />
          <div class="navigation-menu__mobile-button-bar" />
        </div>
      </div>

      <div class="d-none d-md-block">
        <NavigationContent />
      </div>
    </v-app-bar>

    <div
      v-if="modalShouldOpen"
      class="navigation-menu__content d-block d-md-none"
    >
      <NavigationContent />
    </div>
  </div>
</template>

<script>
import NavigationTitle from '@/components/navigation/partials/NavigationTitle';
import NavigationContent from '@/components/navigation/partials/NavigationContent';

export default {
  components: {NavigationContent, NavigationTitle},
  data() {
    return {
      modalShouldOpen: false
    };
  },
  computed: {
    routeName() {
      return this.$route.name;
    }
  },
  watch: {
    routeName() {
      this.modalShouldOpen = false;
    }
  }
};
</script>

<style lang="scss">
.navigation {
  &__app-bar {
    z-index: 20 !important;
  }

  &__app-bar-wrapper {
    width: 100%;
  }

  .navigation-menu {
    &__mobile-button {
      cursor: pointer;
      width: 32px;
      height: 32px;
    }

    &__mobile-button-bar {
      background: #fff;
      width: 100%;
      height: 5px;
      margin: 7px 0;
      border-radius: 5px;

      &:first-child {
        margin-top: 3px;
      }
    }

    &__content {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      z-index: 15;
      background: #eee;
    }
  }
}
</style>
