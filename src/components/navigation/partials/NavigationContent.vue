<template>
  <div class="navigation-content d-block d-md-flex">
    <div class="navigation-content__buttons text-center d-md-flex align-md-center">
      <v-btn
        text
        class="mt-2 mt-md-0"
        @click="pushToShop"
      >
        <v-icon
          left
          class="d-none d-md-block"
        >
          fa-shopping-cart
        </v-icon>

        Shop
      </v-btn>

      <NavigationBranchesButton />

      <v-btn
        v-if="!isAuth"
        text
        :color="getNavigationGroupColor('join')"
        class="mt-2 mt-md-0"
        @click="pushRouteTo('join')"
      >
        <v-icon
          left
          class="d-none d-md-block"
        >
          fa-award
        </v-icon>

        Beitritt
      </v-btn>

      <NavigationSubButtons />
    </div>
  </div>
</template>

<script>
import NavigationBranchesButton from '@/components/navigation/partials/NavigationBranchesButton';
import {mapGetters} from 'vuex';
import NavigationRouteColor from '@/mixins/Navigation/NavigationRouteColor';
import NavigationSubButtons from '@/components/navigation/partials/NavigationSubButtons';

export default {
  components: {NavigationSubButtons, NavigationBranchesButton},
  mixins: [NavigationRouteColor],
  computed: {
    ...mapGetters('auth', ['user', 'isAuth']),
  },
  methods: {
    pushToShop() {
      window.location = 'https://www.teamstolz.de/vereinsshop/alles-im-rudel/';
    }
  }
};
</script>

<style lang="scss">
.navigation-content__buttons {
  @media only screen and (max-width: 960px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
