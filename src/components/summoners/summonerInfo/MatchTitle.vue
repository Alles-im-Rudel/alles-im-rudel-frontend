<template>
  <div v-if="summoner && summoner.summoner.summonerId">
    <v-row>
      <v-col cols="2" class="text-center">
        <v-img
            class="rounded-circle"
            :src="summoner.champion.icon"
        />
        <div class="pt-1">{{ summoner.champion.name }}</div>
      </v-col>
      <v-col cols="10" class="pa-0">
        <v-card flat color="rgb(0,0,0,0)">
          <v-card-title v-bind:style="{color: activeColor}" class="text-h5 pa-0">
            {{ hasWon ? 'Gewonnen' : 'Verloren' }}
          </v-card-title>
          <v-card-title class="subtitle-2">
            {{ match.gameMode }} {{ match.gameType }}
            <v-spacer />
            {{ match.gameDuration | toHHMMSS }}
            <v-spacer />
            {{ match.gameCreation | date }}
          </v-card-title>
          <v-card-text class="pa-0">
            <v-row>
              <v-col cols="2">
                <v-row no-gutters>
                  <v-col cols="6">
                    <v-tooltip top>
                      <template v-slot:activator="{ on }">
                        <v-img
                            :src="summoner.spell1.image"
                            v-on="on"
                        />
                      </template>
                      <span v-html="summoner.spell1.tooltip" />
                    </v-tooltip>
                  </v-col>
                  <v-col cols="6">
                    <v-tooltip top>
                      <template v-slot:activator="{ on }">
                        <v-img
                            :src="summoner.spell2.image"
                            v-on="on"
                        />
                      </template>
                      <span v-html="summoner.spell2.tooltip" />
                    </v-tooltip>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="10" class="text-h6">
                {{ summoner.stats.kills }} / {{ summoner.stats.assists }} / {{ summoner.stats.deaths }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    match: {
      required: true,
      type: Object
    },
    summonerId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      summoner: this.getSummoner(),
    }
  },
  computed: {
    hasWon() {
      return !!this.summoner && this.summoner.teamId === this.match.teams.filter(team => team.win === true)[0].teamId;
    },
    activeColor() {
      return this.hasWon ? 'rgb(0,109,217)' : 'rgb(255,0,0)';
    }
  },
  methods: {
    getSummoner() {
      let array = this.match.teams[0].summoners.concat(this.match.teams[1].summoners)
      return array.filter(summoner => summoner.summoner.summonerId === this.summonerId)[0];
    },
  }
}
</script>