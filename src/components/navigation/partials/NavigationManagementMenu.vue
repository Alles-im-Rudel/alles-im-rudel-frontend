<template>
  <v-menu
    v-if="permissions && can('headline.management')"
    :open-on-hover="!$vuetify.breakpoint.smAndDown"
    :open-on-click="$vuetify.breakpoint.smAndDown"
    bottom
    offset-y
    rounded="0"
    transition="slide-y-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        v-bind="attrs"
        :color="isActive('management')"
        v-on="on"
      >
        <v-icon size="20">
          fa-cog
        </v-icon>
      </v-btn>
    </template>

    <v-list style="width: 95vw; max-width: 250px">
      <v-list-item-group>
        <v-list-item @click="pushRouteTo('management-users')">
          <v-list-item-icon class="mr-2">
            <v-icon small>
              fa-users
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>Benutzer</v-list-item-content>
        </v-list-item>

        <v-list-item @click="pushRouteTo('management-members')">
          <v-list-item-icon class="mr-2">
            <v-icon small>
              fa-user-plus
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>Neue Mitglieder</v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="can('permissions.index')"
          @click="pushRouteTo('management-permissions')"
        >
          <v-list-item-icon class="mr-2">
            <v-icon small>
              fa-shield-alt
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>Berechtigungen</v-list-item-content>
        </v-list-item>

        <v-list-item @click="pushRouteTo('management-clash')">
          <v-list-item-icon class="mr-2">
            <v-icon small>
              fa-cogs
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>Teamverwaltung</v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import {mapGetters} from 'vuex';
import Permissions from '@/mixins/Permissions';

export default {
  mixins: [Permissions],
  computed: {
    ...mapGetters('auth', ['permissions'])
  },
  methods: {
    isActive(group) {
      return this.$route.meta.group === group ? 'grey' : '';
    }
  }
};
</script>