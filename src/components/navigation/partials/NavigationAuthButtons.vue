<template>
  <div class="d-flex align-center">
    <v-btn
      v-if="!isAuth"
      class="mx-1"
      icon
      :color="getNavigationGroupColor('login')"
      @click="pushRouteTo('login')"
    >
      <v-icon size="20">
        fa-sign-in-alt
      </v-icon>
    </v-btn>

    <div class="mx-1">
      <NavigationUserMenu />
      <NavigationManagementMenu />
    </div>
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
