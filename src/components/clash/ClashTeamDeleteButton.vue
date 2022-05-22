<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <v-btn
        v-if="canSeeButton"
        icon
        color="error"
        v-on="on"
        @click="confirmDelete"
      >
        <v-icon>fa-trash-alt</v-icon>
      </v-btn>
    </template>
    <span>Team löschen</span>
  </v-tooltip>
</template>

<script>
import Permissions from '@/mixins/Permissions';

export default {
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
      return this.can('clash_team.delete');
    }
  },
  methods: {
    confirmDelete() {
      this.$root.$confirm
          .open(
              'Löschen',
              'Möchten Sie wirklich das Team: ' + this.clashTeam.name + ' löschen?',
              'error'
          )
          .then(confirm => confirm && this.delete());
    },
    delete() {
      this.isLoading = true;
      const params = {
        clashTeamId: this.clashTeam.id
      };
      window.axios
          .delete(`clash/${this.clashTeam.id}`, {params})
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
          })
          .finally(() => {
            this.isLoading = false;
            this.$emit('clash-team-was-deleted');
          });
    }
  }
};
</script>
