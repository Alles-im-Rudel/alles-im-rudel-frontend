<template>
  <v-card flat v-if="!!summoner.summoner.summonerId">
    <v-card-title>
      {{ summoner.summoner.name }}
    </v-card-title>
    <v-card-text>
      <v-row>

      </v-row>
    </v-card-text>
  </v-card>
  <v-card flat v-else>
    <v-card-title>
      Wähle einen Spieler aus dem Team für Details
    </v-card-title>
  </v-card>
</template>
<script>
export default {
  components: {},
  props: {
    summoner: {
      type: Object,
      requried: false,
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>