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

    <v-btn
      v-if="can('headline.management')"
      icon
      class="ml-4"
      @click="pushRouteTo('management-users')"
      :color="isActive('management')"
    >
      <v-icon>fa-cog</v-icon>
    </v-btn>

    <v-menu
      v-if="isAuth && user && permissions"
      :open-on-hover="!isMobile"
      :open-on-click="isMobile"
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

      <v-list style="width: 95vw; max-width: 250px">
        <v-list-item-group>
          <v-list-item class="d-flex">
            <v-list-item-avatar v-if="user.thumbnail">
              <v-img :src="user.thumbnail.thumbnail" />
            </v-list-item-avatar>
            <div class="text-left">
              <v-list-item-content>
                <v-list-item-title class="title">
                  {{ user.fullName }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
              </v-list-item-content>
            </div>
          </v-list-item>
          <v-divider />
          <v-list-item @click="pushRouteTo('profile')">
            <v-list-item-icon class="mr-2">
              <v-icon small>fa-edit</v-icon>
            </v-list-item-icon>
            <v-list-item-content>Profil bearbeiten</v-list-item-content>
          </v-list-item>
          <v-list-item @click="pushRouteTo('calendar')">
            <v-list-item-icon class="mr-2">
              <v-icon small>fa-calendar-alt</v-icon>
            </v-list-item-icon>
            <v-list-item-content>Kalender</v-list-item-content>
          </v-list-item>
          <v-divider/>
          <v-list-item @click="logout">
            <v-list-item-icon class="mr-2">
              <v-icon small>fa-sign-out-alt</v-icon>
            </v-list-item-icon>
            <v-list-item-content>Abmelden</v-list-item-content>
          </v-list-item>
        </v-list-item-group>
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
    }
  }
};
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>