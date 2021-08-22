<template>
  <v-dialog v-model="showDialog" fullscreen>
    <template v-slot:activator="{ on: dialog }">
      <v-tooltip top>
        <template v-slot:activator="{ on:tooltip }">
          <v-btn
              v-if="isAuth"
              color="primary"
              class="px-0 ml-1 text-normal"
              text
              v-on="{ ...dialog, ...tooltip}"
          >
            {{ summoner.name }}
          </v-btn>
          <span v-else v-on="{...tooltip}">{{ summoner.name }}</span>
        </template>
        <span v-if="isAuth">Profil von {{ summoner.name }} ansehen</span>
        <span v-else>Melde dich an, um das Profil von {{ summoner.name }} anzusehen!</span>
      </v-tooltip>
    </template>
    <summoner-info :summoner="summoner" @close="close" />
  </v-dialog>
</template>

<script>
import SummonerInfo from "@/components/summoners/summonerInfo/SummonerInfo";
import {mapGetters} from "vuex";

export default {
  components: {
    SummonerInfo
  },
  computed: {
    ...mapGetters('auth', ['isAuth']),
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

<style scoped>
.text-normal {
  text-transform: none;
}
</style>