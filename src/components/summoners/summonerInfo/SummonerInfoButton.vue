<template>
  <v-dialog v-model="showDialog" fullscreen>
    <template v-slot:activator="{ on: dialog }">
      <v-tooltip top>
        <template v-slot:activator="{ on:tooltip }">
          <v-btn
              color="primary"
              class="ml-1"
              text
              v-on="{ ...dialog, ...tooltip}"
          >
            Profil
          </v-btn>
        </template>
        <span>Profil von {{ summoner.name }} ansehen</span>
      </v-tooltip>
    </template>
    <summoner-info :summoner="summoner" @close="close" />
  </v-dialog>
</template>

<script>
import SummonerInfo from "@/components/summoners/summonerInfo/SummonerInfo";

export default {
  components: {
    SummonerInfo
  },
  props: {
    summoner: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      showDialog: false
    }
  },
  methods: {
    close() {
      this.showDialog = false;
    }
  }
}
</script>