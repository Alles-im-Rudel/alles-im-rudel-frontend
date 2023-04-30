<template>
  <div class="mobile-navigation-menu">
    <div
      class="mobile-navigation-menu__header"
      @click="isOpen = !isOpen"
    >
      <div class="text-body-1 text-center text-decoration-none text-uppercase py-3">
        {{ item.name }}
      </div>

      <div class="mobile-navigation-menu__expand-button">
        <div
          class="mobile-navigation-menu__expand-button-arrow"
          :class="isOpen && 'mobile-navigation-menu__expand-button-arrow--open'"
        />
      </div>
    </div>

    <div
      v-if="isOpen"
      class="mobile-navigation-menu__content pb-1"
    >
      <MobileNavigationMenuButton
        v-for="(navigationItem, index) in item.children"
        :key="index"
        :item="navigationItem"
      />
    </div>
  </div>
</template>

<script>
import MobileNavigationMenuButton
  from '@/components/navigation/partials/MobileNavigation/partials/MobileNavigationMenuButton.vue';

export default {
  components: {MobileNavigationMenuButton},
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style lang="scss">
.mobile-navigation-menu {
  &__header {
    position: relative;
    cursor: pointer;
  }

  &__expand-button {
    position: absolute;
    right: 48px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__expand-button-arrow {
    width: 12px;
    height: 12px;
    border-bottom: 2px solid #333;
    border-right: 2px solid #333;
    transform: rotate(-45deg);
    margin-right: 8px;
  }

  &__expand-button-arrow--open {
    transform: rotate(45deg);
    margin-right: 0;
    margin-bottom: 8px;
  }
}
</style>