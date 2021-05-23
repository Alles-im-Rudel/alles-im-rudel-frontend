<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <v-btn
          icon
          v-on="on"
          @click="pushToProfile"
      >
        <v-icon>fa-search</v-icon>
      </v-btn>
    </template>
    <span>Profil ansehen</span>
  </v-tooltip>
</template>

<script>
import Permissions from '@/mixins/Permissions';

export default {
  mixins: [Permissions],
  props: {
    username: {
      type: String,
      required: true
    },
  },
  methods: {
    pushToProfile() {
      this.pushRouteTo('profile-show', {
        username: this.username
      })
    }
  }
};
</script>
