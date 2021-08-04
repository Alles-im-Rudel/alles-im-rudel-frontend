<template>
  <v-card flat v-if="!!summoner.summoner.summonerId">
    <v-card-title>
      {{ summoner.summoner.name }}
      <v-spacer />
      <div class="item-row">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-img
                max-width="30%"
                :src="summoner.spell1.image"
                v-on="on"
            />
          </template>
          <span v-html="summoner.spell1.tooltip" />
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-img
                max-width="30%"
                :src="summoner.spell2.image"
                v-on="on"
            />
          </template>
          <span v-html="summoner.spell2.tooltip" />
        </v-tooltip>
      </div>
    </v-card-title>
    <v-card-text>

      <v-row no-gutters>
        <v-col cols="12">
          <div
              class="item-row"
          >
            <v-img
                class="item"
                :src="summoner.stats.item0"
            />
            <v-img
                class="item"
                :src="summoner.stats.item1"
            />
            <v-img
                class="item"
                :src="summoner.stats.item2"
            />
            <v-img
                class="item"
                :src="summoner.stats.item3"
            />
            <v-img
                class="item"
                :src="summoner.stats.item4"
            />
            <v-img
                class="item"
                :src="summoner.stats.item5"
            />
            <v-img
                class="item"
                :src="summoner.stats.item6"
            />
          </div>
        </v-col>
        <v-col cols="12">

        </v-col>
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

<style scoped>
.item {
  border-color: goldenrod;
  border-style: solid;
  border-width: 1px;
  min-width: 15%;
  max-width: 15%;
}

.item-row {
  display: flex;
  align-items: stretch;
}
</style>