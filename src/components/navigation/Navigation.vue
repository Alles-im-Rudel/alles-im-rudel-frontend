<template>
  <v-app-bar
    color="primary"
    dark
    app
    clipped-left
  >
    <v-toolbar-title
      class="cursor-pointer pl-0 pl-sm-1 d-flex align-center"
      @click="pushRouteTo('home')"
    >
      <v-icon
        :size="isMobile ? 56 : 64"
        class="mr-3"
      >
        $vuetify.icons.allesimrudel
      </v-icon>
      <span v-if="!isMedium">
        Alles im Rudel e.V.
      </span>
    </v-toolbar-title>

    <v-spacer />
    <v-btn
      :text="!isMedium"
      :icon="isMedium"
      @click="pushToShop"
    >
      <v-icon :left="!isMedium">
        fa-shopping-cart
      </v-icon>
      {{ !isMedium ? 'Shop' : '' }}
    </v-btn>
    <v-menu
      bottom
      offset-y
      close-on-content-click
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          :color="isActive('branch')"
          class="mr-0 mr-sm-1"
          :text="!isMedium"
          :icon="isMedium"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon :left="!isMedium">
            fa-code-branch
          </v-icon>
          {{ !isMedium ? 'Sparten' : '' }}
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          link
          @click="pushRouteTo('airsoft')"
        >
          Airsoft
        </v-list-item>
        <v-list-item
          link
          @click="pushRouteTo('esports')"
        >
          E-Sports
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn
      v-if="!isAuth"
      :text="!isMedium"
      :icon="isMedium"
      :color="isActive('join')"
      @click="pushRouteTo('join')"
    >
      <v-icon :left="!isMedium">
        fa-award
      </v-icon>
      {{ !isMedium ? 'Beitritt' : '' }}
    </v-btn>

    <v-divider
      vertical
      inset
      class="mx-2"
    />

    <!-- Ohne Auth -->
    <v-btn
      v-if="!isAuth"
      :text="!isMedium"
      :icon="isMedium"
      :color="isActive('login')"
      class="mr-1"
      @click="pushRouteTo('login')"
    >
      <v-icon :left="!isMedium">
        fa-sign-in-alt
      </v-icon>
      {{ !isMedium ? 'Login' : '' }}
    </v-btn>

    <!-- Auth -->
    <NavigationManagementMenu />
    <NavigationUserMenu />
  </v-app-bar>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import Permissions from '@/mixins/Permissions';
import CheckMobile from '@/mixins/CheckMobile';
import NavigationManagementMenu from '@/components/navigation/navigationBarParts/NavigationManagementMenu';
import NavigationUserMenu from '@/components/navigation/navigationBarParts/NavigationUserMenu';

export default {
  components: {
    NavigationUserMenu,
    NavigationManagementMenu
  },
  mixins: [Permissions, CheckMobile],
  computed: {
    ...mapGetters('auth', ['user', 'isAuth', 'permissions']),
  },
  methods: {
    ...mapActions('auth', ['logout']),
    isActive(group) {
      return this.$route.meta.group === group ? 'grey' : '';
    },
    pushToShop(){
      window.location = 'https://www.teamstolz.de/vereinsshop/alles-im-rudel/';
    }
  }
};
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>