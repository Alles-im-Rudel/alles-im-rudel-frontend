<template>
  <v-app-bar color="primary" dark app clipped-left>
    <v-app-bar-nav-icon @click="toggleMenu" />
    <v-toolbar-title>Alles Im Rudel</v-toolbar-title>
    <v-spacer />
    <v-menu
        v-if="isAuth && user && permissions"
        open-on-hover
        bottom
        offset-y
        rounded="0"
        transition="slide-y-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" large v-on="on">
          <v-icon small class="mr-1">fa-user</v-icon>
          {{ user.fullName }}
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="switchPage('profile')">
          <v-list-item-title>
            <v-icon small class="mr-1">fa-edit</v-icon>
            Benutzer bearbeiten
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
    <v-menu
        v-if="isAuth && user && permissions"
        open-on-hover
        bottom
        offset-y
        rounded="0"
        transition="slide-y-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" large v-on="on">
          <v-icon small class="mr-1">fa-user</v-icon>
          {{ user.fullName }}
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="switchPage('profile')">
          <v-list-item-title>
            <v-icon small class="mr-1">fa-edit</v-icon>
            Benutzer bearbeiten
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
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['user', 'isAuth', 'permissions'])
  },
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    ...mapActions('auth', ['logout']),
    toggleMenu() {
      this.$emit('toggle-menu');
    },
    switchPage(name) {
      if (this.$route.name !== name) {
        this.$router.push({ name: 'profile' });
      }
    }
  }
};
</script>
