<template>
  <base-card flat>
    <v-card-title>Alles Im Rudel Summoner suche</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" lg="3">
          <v-text-field
              label="Summoner Name"
              @keyup.enter.native="getSummoner"
              v-model="summonerName"
          />
        </v-col>
        <v-col cols="12" lg="9">
          <summoner-card :summoner="summoner" @summoner-reloaded="getSummoner" />
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider />
    <reset-save-action
        :is-loading="isLoading"
        :can-submit="canSubmit"
        :has-changes="hasChanges"
        submit-text="Suchen"
        @submit="getSummoner"
        @clear="clear"
    />
  </base-card>
</template>

<script>
import ResetSaveAction from "@/components/cardActions/ResetSaveAction";
import SummonerCard from "@/components/summoners/SummonerCard";

export default {
  name: "Summoner",
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