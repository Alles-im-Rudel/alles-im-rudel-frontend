<template>
  <div class="navigation-sub-buttons d-md-flex">
    <v-divider
      :vertical="!$vuetify.breakpoint.smAndDown"
      class="my-4 my-md-0 mx-md-2"
    />

    <v-btn
      v-if="!isAuth"
      icon
      :color="getNavigationGroupColor('login')"
      @click="pushRouteTo('login')"
    >
      <v-icon>
        fa-sign-in-alt
      </v-icon>
    </v-btn>

    <NavigationUserMenu />
    <NavigationManagementMenu />
  </div>
</template>

<script>
import NavigationUserMenu from '@/components/navigation/partials/NavigationUserMenu';
import NavigationManagementMenu from '@/components/navigation/partials/NavigationManagementMenu';
import {mapGetters} from 'vuex';
import NavigationRouteColor from '@/mixins/Navigation/NavigationRouteColor';

export default {
  components: {NavigationManagementMenu, NavigationUserMenu},

  mixins: [NavigationRouteColor],

  computed: {
    ...mapGetters('auth', ['isAuth'])
  },
};
</script>

<style lang="scss">
.navigation-sub-buttons {

}
</style>
