<template>
  <v-app-bar color="primary" dark app clipped-left>
    <v-app-bar-nav-icon
        v-if="showNavigationDrawer"
        @click="toggleMenu"
    />

    <v-toolbar-title
        @click="pushToHome"
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

    <v-spacer />

    <v-btn
        :text="!isMedium"
        :icon="isMedium"
        @click="pushToAirsoft"
        :color="isActive('airsoft')"
        class="mr-1"
    >
      <v-icon :left="!isMedium">fa-tree</v-icon>
      {{ !isMedium ? 'Airsoft' : '' }}
    </v-btn>

    <v-btn
        :text="!isMedium"
        :icon="isMedium"
        @click="pushToGaming"
        :color="isActive('gaming')"
        class="mr-2"
    >
      <v-icon :left="!isMedium">fa-headset</v-icon>
      {{ !isMedium ? 'E-Sports' : '' }}
    </v-btn>

    <v-divider vertical inset />

    <!-- Ohne Auth -->

    <v-btn
        :text="!isMedium"
        :icon="isMedium"
        v-if="!isAuth"
        @click="pushToLogin"
        :color="isActive('login')"
        class="mr-1 ml-2"
    >
      <v-icon :left="!isMedium">fa-sign-in-alt</v-icon>
      {{ !isMedium ? 'Login' : '' }}
    </v-btn>

    <!-- Auth -->

    <v-btn
        v-if="can('headline.management')"
        icon
        class="ml-4"
        @click="pushToManagement"
        :color="isActive('management')"
    >
      <v-icon>fa-cog</v-icon>
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
        <v-btn
            icon
            class="mr-0"
            :class="can('headline.management') ? 'ml-1' : 'ml-4'"
            :color="isActive('profile')"
            v-bind="attrs"
            v-on="on"
        >
          <v-icon>fa-user</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="switchPage('profile')">
          <v-list-item-title>
            <v-icon small class="mr-1">fa-edit</v-icon>
            Profil bearbeiten
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="switchCalendar">
          <v-list-item-title>
            <v-icon small class="mr-1">fa-calendar-alt</v-icon>
            Kalender
          </v-list-item-title>
        </v-list-item>
        <v-divider />
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
    },
    switchPage(name) {
      if (this.$route.name !== name) {
        this.$router.push({name: 'profile'});
      }
    },
    switchCalendar() {
      this.$router.push({name: 'calendar'});
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
    pushToLogin() {
      this.$router.push({name: 'login'});
    },
    pushToRegister() {
      this.$router.push({name: 'register'});
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