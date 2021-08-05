<template>
  <v-app-bar color="primary" dark app clipped-left>
    <v-toolbar-title
        @click="pushRouteTo('home')"
        class="cursor-pointer pl-0 pl-sm-1 d-flex align-center"
    >
      <v-icon
          :size="isMobile ? 56 : 64"
          class="mr-3"
      >
        $vuetify.icons.allesimrudel
      </v-icon>
      <span v-if="!isMedium">
        Alles im Rudel
      </span>
    </v-toolbar-title>

    <v-spacer />

    <v-btn
        :text="!isMedium"
        :icon="isMedium"
        @click="pushRouteTo('news')"
        :color="isActive('news')"
        class="mr-0 mr-sm-1"
    >
      <v-icon :left="!isMedium">fa-newspaper</v-icon>
      {{ !isMedium ? 'News' : '' }}
    </v-btn>

    <v-btn
        :text="!isMedium"
        :icon="isMedium"
        @click="pushRouteTo('branches')"
        :color="isActive('branch')"
        class="mr-0 mr-sm-1"
    >
      <v-icon :left="!isMedium">fa-code-branch</v-icon>
      {{ !isMedium ? 'Sparten' : '' }}
    </v-btn>

    <v-btn
        :text="!isMedium"
        :icon="isMedium"
        @click="pushRouteTo('join')"
        :color="isActive('join')"
        class="mr-1 mr-sm-4"
    >
      <v-icon :left="!isMedium">fa-award</v-icon>
      {{ !isMedium ? 'Beitritt' : '' }}
    </v-btn>

    <v-divider vertical inset />

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

export default {
  components: {
    NavigationManagementMenu: () => import("./navigationBarParts/NavigationManagementMenu"),
    NavigationUserMenu: () => import("./navigationBarParts/NavigationUserMenu")
  },
  mixins: [Permissions, CheckMobile],
  computed: {
    ...mapGetters('auth', ['user', 'isAuth', 'permissions']),
  },
  methods: {
    ...mapActions('auth', ['logout']),
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