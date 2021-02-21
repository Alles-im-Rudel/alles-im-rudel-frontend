<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <v-card color="rgb(255, 255, 255, 0.9)">
          <v-card-title>Alles Im Rudel im Leauge of Legends warn</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" lg="3">
                <v-text-field
                    label="Summoner Name"
                    v-model="summonerName"
                />
              </v-col>
              <v-col cols="12" lg="9">
                <summoner-card :summoner="summoner" @summonerReloaded="getSummoner" />
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider />
          <reset-save-action
              :is-loading="isLoading"
              :can-submit="canSubmit"
              :has-changes="hasChanges"
              @keyup.enter.native="getSummoner"
              @submit="getSummoner"
              @clear="clear"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ResetSaveAction from "@/components/cardActions/ResetSaveAction";
import SummonerCard from "@/components/summoners/SummonerCard";

export default {
  name: "Gaming-Lol",
  components: {
    ResetSaveAction,
    SummonerCard
  },
  data() {
    return {
      isLoading: false,
      summonerName: null,
      summoner: {}
    }
  },
  computed: {
    canSubmit() {
      return !!this.summonerName && this.hasChanges
    },
    hasChanges() {
      return !!this.summonerName
    }
  },
  methods: {
    getSummoner() {
      this.isLoading = true;
      const params = {
        summonerName: this.summonerName
      };
      window.axios.get('summoners/show', {params})
          .then(response => {
            this.summoner = response.data.summoner
          }).finally(() => this.isLoading = false)
    },
    clear() {
      this.summonerName = null;
    }
  }
}
</script>