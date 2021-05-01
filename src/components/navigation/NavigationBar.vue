<template>
  <v-app-bar color="primary" dark app clipped-left>
    <v-app-bar-nav-icon @click="toggleMenu" />

    <v-toolbar-title
      v-if="!isMobile"
      @click="pushToHome"
      class="mr-2 cursor-pointer"
    >
      Alles Im Rudel
    </v-toolbar-title>

    <v-toolbar-title
      v-if="isMobile"
      @click="pushToHome"
      class="mr-2"
    >
      <v-icon :color="isActive('home')">fa-home</v-icon>
    </v-toolbar-title>

    <v-btn :text="!isMobile" :icon="isMobile" @click="pushToAirsoft" :color="isActive('airsoft')">
      <v-icon :left="!isMobile">fa-tree</v-icon>
      {{ !isMobile ? 'Airsoft' : '' }}
    </v-btn>
    <v-btn :text="!isMobile" :icon="isMobile" @click="pushToGaming" :color="isActive('gaming')">
      <v-icon :left="!isMobile">fa-headset</v-icon>
      {{ !isMobile ? 'Gaming' : '' }}
    </v-btn>
    <v-spacer />
    <v-btn :text="!isMobile" :icon="isMobile" v-if="can('headline.management')" @click="pushToManagement"
           :color="isActive('management')">
      <v-icon :left="!isMobile">fa-cogs</v-icon>
      {{ !isMobile ? 'Management' : '' }}
    </v-btn>
    <v-menu
        v-if="isAuth && user && permissions"
        open-on-hover
        bottom
        offset-y
        rounded="0"
        transition="slide-y-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn :text="!isMobile" :icon="isMobile" v-bind="attrs" v-on="on" :color="isActive('profile')">
          <v-icon :left="!isMobile">fa-user-cog</v-icon>
          {{ !isMobile ? user.username : '' }}
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="switchPage('profile')">
          <v-list-item-title>
            <v-icon small class="mr-1">fa-edit</v-icon>
            Profil bearbeiten
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-title>
            <v-icon small class="mr-1">fa-sign-out-alt</v-icon>
            Abmelden
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import Permissions from "@/mixins/Permissions";
import CheckMobile from "@/mixins/CheckMobile";

export default {
  mixins: [Permissions, CheckMobile],
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
    },
    switchPage(name) {
      if (this.$route.name !== name) {
        this.$router.push({name: 'profile'});
      }
    },
    pushToAirsoft() {
      this.$router.push({name: 'airsoft'});
    },
    pushToGaming() {
      this.$router.push({name: 'gaming'});
    },
    pushToManagement() {
      this.$router.push({name: 'management-users'});
    },
    pushToHome() {
      this.$router.push({name: 'home'})
    }
  }
};
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>