<template>
  <v-dialog v-model="showDialog" max-width="600px">
    <template #activator="{ on }">
      <v-btn
          v-if="canSeeButton"
          color="primary"
          v-on="on"
      >
        <v-icon left>fa-plus</v-icon>
        Neues Clashteam erstellen
      </v-btn>
    </template>
    <clash-team-create @close="close" @created="$emit('created')" />
  </v-dialog>
</template>

<script>
import Permissions from '@/mixins/Permissions';
import ClashTeamCreate from '@/components/clash/ClashTeamCreate'

export default {
  mixins: [Permissions],
  components: {
    ClashTeamCreate
  },
  data() {
    return {
      showDialog: false
    }
  },
  computed: {
    canSeeButton() {
      return this.can('clash.create');
    }
  },
  methods: {
    close() {
      this.showDialog = false;
    }
  }
};
</script>
