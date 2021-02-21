<template>
  <v-card v-if="summoner.id">
    <v-card-title>
      {{ summoner.name }}
      <v-spacer />
      <summoner-reload-button :summoner="summoner" @summonerReloaded="$emit('summonerReloaded')"/>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-row>
        <v-col cols="12" lg="6">
          Summoner Id:
        </v-col>
        <v-col cols="12" lg="6">
          {{ summoner.summonerId }}
        </v-col>
        <v-col cols="12" lg="6">
          Account Id:
        </v-col>
        <v-col cols="12" lg="6">
          {{ summoner.accountId }}
        </v-col>
        <v-col cols="12" lg="6">
          Puu Id:
        </v-col>
        <v-col cols="12" lg="6">
          {{ summoner.puuid }}
        </v-col>
        <v-col cols="12" lg="6">
          Name:
        </v-col>
        <v-col cols="12" lg="6">
          {{ summoner.name }}
        </v-col>
        <v-col cols="12" lg="6">
          Profilbild Id:
        </v-col>
        <v-col cols="12" lg="6">
          {{ summoner.profileIconId }}
        </v-col>
        <v-col cols="12" lg="6">
          Revision Data:
        </v-col>
        <v-col cols="12" lg="6">
          {{ summoner.revisionDate | dateTime }}
        </v-col>
        <v-col cols="12" lg="6">
          Summoner Level:
        </v-col>
        <v-col cols="12" lg="6">
          {{ summoner.summonerLevel }}
        </v-col>
        <v-col cols="12" lg="6">
          Aktualiesiert um:
        </v-col>
        <v-col cols="12" lg="6">
          {{ summoner.updatedAt | dateTime }}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import SummonerReloadButton from "@/components/summoners/SummonerReloadButton";

export default {
  components: {
    SummonerReloadButton
  },
  props: {
    summoner: {
      required: true,
      type: Object
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>