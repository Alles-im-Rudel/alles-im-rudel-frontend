<template>
  <v-menu
    v-if="permissions && can('headline.management')"
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
        class="ml-1 ml-sm-4"
        v-bind="attrs"
        v-on="on"
        :color="isActive('management')"
      >
        <v-icon>fa-cog</v-icon>
      </v-btn>
    </template>

    <v-list style="width: 95vw; max-width: 250px">
      <v-list-item-group>
        <v-list-item @click="pushRouteTo('management-users')">
          <v-list-item-icon class="mr-2">
            <v-icon small>fa-users</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Benutzer</v-list-item-content>
        </v-list-item>
        <v-list-item @click="pushRouteTo('management-permissions')">
          <v-list-item-icon class="mr-2">
            <v-icon small>fa-shield-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Berechtigungen</v-list-item-content>
        </v-list-item>
        <v-list-item @click="pushRouteTo('management-clash')">
          <v-list-item-icon class="mr-2">
            <v-icon small>fa-cogs</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Clash</v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import {mapGetters} from 'vuex';
import Permissions from "@/mixins/Permissions";
import CheckMobile from "@/mixins/CheckMobile";

export default {
  mixins: [Permissions, CheckMobile],
  computed: {
    ...mapGetters('auth', ['permissions'])
  },
  methods: {
    isActive(group) {
      return this.$route.meta.group === group ? 'darkGrey' : ''
    }
  }
}
</script>