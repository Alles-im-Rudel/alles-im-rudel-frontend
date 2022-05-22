<template>
  <v-dialog
    v-model="showDialog"
    persistent
    max-width="1900px"
  >
    <template #activator="{ on:dialog }">
      <v-tooltip top>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn
            v-if="canSeeButton"
            icon
            color="greyBlue"
            v-on="{ ...dialog, ...tooltip }"
          >
            <v-icon>fa-edit</v-icon>
          </v-btn>
        </template>
        <span>Team bearbeiten</span>
      </v-tooltip>
    </template>
    <clash-team-edit
      v-model="clashTeam"
      @close="close"
      @updated="$emit('updated')"
    />
  </v-dialog>
</template>

<script>
import Permissions from '@/mixins/Permissions';
import ClashTeamEdit from '@/components/clash/ClashTeamEdit';

export default {
  components: {
    ClashTeamEdit
  },
  mixins: [Permissions],
  props: {
    clashTeam: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showDialog: false
    };
  },
  computed: {
    canSeeButton() {
      return this.can('clash_team.update');
    }
  },
  methods: {
    close() {
      this.showDialog = false;
    }
  }
};
</script>
