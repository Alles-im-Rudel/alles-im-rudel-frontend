<template>
  <v-menu
    v-if="user && permissions"
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
        :class="can('headline.management') ? 'ml-0 ml-sm-1' : 'ml-0'"
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
            <v-icon small>
              fa-edit
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>Profil bearbeiten</v-list-item-content>
        </v-list-item>
        <v-list-item @click="pushRouteTo('calendar')">
          <v-list-item-icon class="mr-2">
            <v-icon small>
              fa-calendar-alt
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>Kalender</v-list-item-content>
        </v-list-item>
        <v-list-item @click="pushRouteTo('internal')">
          <v-list-item-icon class="mr-2">
            <v-icon small>
              fa-check
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>Intern</v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item @click="logout">
          <v-list-item-icon class="mr-2">
            <v-icon small>
              fa-sign-out-alt
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>Abmelden</v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import Permissions from '@/mixins/Permissions';
import CheckMobile from '@/mixins/CheckMobile';

export default {
  mixins: [Permissions, CheckMobile],
  computed: {
    ...mapGetters('auth', ['user', 'permissions'])
  },
  methods: {
    ...mapActions('auth', ['logout']),
    isActive(group) {
      return this.$route.meta.group === group ? 'grey' : '';
    }
  }
};
</script>