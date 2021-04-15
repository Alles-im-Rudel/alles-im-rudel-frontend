<template>
  <div>
    <v-card-title>
      Champions
      <v-spacer />
      Mastery Score: {{ data.masteryScore }}
      <v-spacer />
    </v-card-title>
    <v-card-text v-if="data.champions.length > 0 && !isLoading">
      <v-row>
        <v-col
            cols="12"
            md="3"
            v-for="championData in data.champions"
            :key="championData.championId"
        >
          <mastery-champion-splash-art
              :champion="championData.champion"
              :champion-data="championData"
          />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text v-else>
      <v-skeleton-loader class="mx-auto" type="card" />
    </v-card-text>
  </div>
</template>

<script>
import MasteryChampionSplashArt from "@/components/summoners/MasteryChampionSplashArt";

export default {
  components: {
    MasteryChampionSplashArt
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
      data: {
        champions: [],
        masteryScore: null
      }
    }
  },
  created() {
    this.getChamps();
  },
  watch: {
    summonerId: {
      handler() {
        this.getChamps();
      }
    }
  },
  computed: {},
  methods: {
    getChamps() {
      this.isLoading = true
      window.axios.get(`summoners/info-champions/${this.summoner.id}`)
          .then(response => {
            this.data = response.data
          })
          .catch(error => {
            this.$root.$snackbar.open(error.response.data.message, 'error');
          })
          .finally(() => this.isLoading = false)
    }
  }
}
</script>