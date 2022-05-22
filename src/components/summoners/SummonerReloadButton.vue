<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <v-btn
        v-if="canSeeButton"
        color="darkGrey"
        :loading="isLoading"
        :disabled="!canReload"
        icon
        v-on="on"
        @click="reloadSummoner"
      >
        <v-icon>fa-sync</v-icon>
      </v-btn>
    </template>
    <span>Summoner aktualisieren</span>
  </v-tooltip>
</template>

<script>

import Permissions from '@/mixins/Permissions';

export default {
  mixins: [Permissions],
  props: {
    summoner: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    canReload() {
      return true;
    },
    canSeeButton() {
      return this.checkAuth && this.can('summoners.reload');
    }
  },
  methods: {
    reloadSummoner() {
      this.isLoading = true;
      const params = {
        id: this.summoner.id
      };
      window.axios.get(`summoners/reload/${this.summoner.id}`, {params})
          .then(response => {
            this.$root.$snackbar.open(response.data.message);
            this.$emit('summoner-reloaded');
          })
          .catch(error => {
            this.$root.$snackbar.open(error.response.data.message, 'error');
          })
          .finally(() => this.isLoading = false);
    }
  }
};
</script>