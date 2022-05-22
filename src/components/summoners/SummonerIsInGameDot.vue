<template>
  <div>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-icon
          small
          class="mb-1 ml-1"
          :color="isInGame ? 'success' : ''"
          :loading="isLoading"
          v-on="on"
        >
          fa-circle
        </v-icon>
      </template>
      <span>{{ isInGame ? 'In Game' : 'Ist nicht in-game' }}</span>
    </v-tooltip>
    <v-dialog
      v-if="isInGame"
      v-model="showDialog"
      fullscreen
    >
      <template v-slot:activator="{ on: dialog }">
        <v-tooltip top>
          <template v-slot:activator="{ on:tooltip }">
            <v-btn
              v-if="isInGame"
              color="primary"
              text
              v-on="{ ...dialog, ...tooltip}"
            >
              Game Info
            </v-btn>
          </template>
          <span>Game Infos ansehen</span>
        </v-tooltip>
      </template>
      <summoner-active-game
        :summoner="summoner"
        @close="close"
      />
    </v-dialog>
  </div>
</template>

<script>

import Permissions from '@/mixins/Permissions';
import SummonerActiveGame from '@/components/summoners/SummonerActiveGame';

export default {
  components: {
    SummonerActiveGame
  },
  mixins: [Permissions],
  props: {
    summoner: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      isLoading: false,
      isInGame: false,
      showDialog: false
    };
  },
  watch: {
    'summoner.id': {
      handler() {
        this.getActiveGame();
      }
    }
  },
  created() {
    this.getActiveGame();
  },
  methods: {
    getActiveGame() {
      this.isLoading = true;
      window.axios.get(`summoners/check-active-game/${this.summoner.id}`)
          .then(response => {
            this.isInGame = !!response.data;
          })
          .catch(error => {
            this.$root.$snackbar.open(error.response.data.message, 'error');
          })
          .finally(() => this.isLoading = false);
    },
    close() {
      this.showDialog = false;
    }
  }
};
</script>