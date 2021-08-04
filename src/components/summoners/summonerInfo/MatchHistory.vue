<template>
  <div>
    <v-card-title>
      Match History
    </v-card-title>
    <v-card-text v-if="!isLoading && matches.length > 0">
      <v-expansion-panels accordion>
        <v-expansion-panel
            v-for="match in matches"
            :key="match.gameId"
        >
          <v-expansion-panel-header>
            <match-title v-if="match.gameData" :match="match.gameData" :summoner-id="summoner.summonerId" />
            <div v-else>Leider ist ein Problem aufgeträten...</div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <match-body v-if="match.gameData" :match="match.gameData" :summoner-id="summoner.summonerId" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
    <v-card-text v-else>
      <v-skeleton-loader class="mx-auto" type="card" />
    </v-card-text>
  </div>
</template>

<script>
import MatchTitle from "@/components/summoners/summonerInfo/MatchTitle";
import MatchBody from "@/components/summoners/summonerInfo/MatchBody";

export default {
  components: {
    MatchTitle,
    MatchBody
  },
  props: {
    summoner: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      isLoading: false,
      matches: [],
      endIndex: 4,
      beginIndex: 0
    }
  },
  created() {
    this.getMatches();
  },
  watch: {
    summonerId: {
      handler() {
        this.getMatches();
      }
    }
  },
  computed: {},
  methods: {
    getMatches() {
      this.isLoading = true
      const params = {
        endIndex: this.endIndex,
        beginIndex: this.beginIndex
      }
      window.axios.get(`summoners/info-matches/${this.summoner.id}`, {params})
          .then(response => {
            this.matches = response.data
          })
          .catch(error => {
            this.$root.$snackbar.open(error.response.data.message, 'error');
          })
          .finally(() => this.isLoading = false)
    }
  }
}
</script>