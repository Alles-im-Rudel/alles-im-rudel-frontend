<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <v-btn
        v-if="canSeeButton"
        color="primary"
        icon
        :to="`/management/users/${user.id}/edit`"
        v-on="on"
      >
        <v-icon>fa-user-edit</v-icon>
      </v-btn>
    </template>
    <span>Benutzer bearbeiten</span>
  </v-tooltip>
</template>

<script>
import Permissions from '@/mixins/Permissions';

export default {
  mixins: [Permissions],
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    canSeeButton() {
      return this.can('users.update') && !this.user.deletedAt;
    }
  }
};
</script>
