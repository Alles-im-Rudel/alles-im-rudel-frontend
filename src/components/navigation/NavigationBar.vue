<template>
  <v-app-bar color="primary" dark app clipped-left>
    <v-app-bar-nav-icon
      v-if="showNavigationDrawer"
      @click="toggleMenu"
    />

    <v-toolbar-title
      @click="pushRouteTo('home')"
      class="cursor-pointer pl-1 d-flex align-center"
    >
      <v-icon
        size="64"
        class="mr-3"
      >
        $vuetify.icons.allesimrudel
      </v-icon>
      <span v-if="!isMedium">
        Alles im Rudel
      </span>
    </v-toolbar-title>

    <v-spacer/>

    <v-btn
        :text="!isMedium"
        :icon="isMedium"
        @click="pushRouteTo('news')"
        :color="isActive('news')"
        class="mr-1"
    >
      <v-icon :left="!isMedium">fa-newspaper</v-icon>
      {{ !isMedium ? 'News' : '' }}
    </v-btn>

    <v-btn
      :text="!isMedium"
      :icon="isMedium"
      @click="pushRouteTo('branches')"
      :color="isActive('branch')"
      class="mr-1"
    >
      <v-icon :left="!isMedium">fa-code-branch</v-icon>
      {{ !isMedium ? 'Sparten' : '' }}
    </v-btn>

    <v-btn
      :text="!isMedium"
      :icon="isMedium"
      @click="pushRouteTo('join')"
      :color="isActive('join')"
      class="mr-4"
    >
      <v-icon :left="!isMedium">fa-award</v-icon>
      {{ !isMedium ? 'Beitritt' : '' }}
    </v-btn>

    <v-divider vertical inset/>

    <!-- Ohne Auth -->

    <v-btn
      :text="!isMedium"
      :icon="isMedium"
      v-if="!isAuth"
      @click="pushRouteTo('login')"
      :color="isActive('login')"
      class="mr-1 ml-2"
    >
      <v-icon :left="!isMedium">fa-sign-in-alt</v-icon>
      {{ !isMedium ? 'Login' : '' }}
    </v-btn>

    <!-- Auth -->

    <navigation-management-menu />
    <navigation-user-menu />
  </v-app-bar>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import Permissions from "@/mixins/Permissions";
import CheckMobile from "@/mixins/CheckMobile";
import NavigationUserMenu from "./navigationBarParts/NavigationUserMenu";
import NavigationManagementMenu from "./navigationBarParts/NavigationManagementMenu";

export default {
  components: {NavigationManagementMenu, NavigationUserMenu},
  mixins: [Permissions, CheckMobile],
  props: {
    showNavigationDrawer: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    ...mapGetters('auth', ['user', 'isAuth', 'permissions']),
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    ...mapActions('auth', ['logout']),
    toggleMenu() {
      this.$emit('toggle-menu');
    },
    isActive(group) {
      return this.$route.meta.group === group ? 'darkGrey' : ''
    }
  }
};
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>