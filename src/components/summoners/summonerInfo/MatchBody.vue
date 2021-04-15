<template>
  <div v-if="summoner && summoner.summoner.summonerId">
    <v-row
        v-for="(team, index) in match.teams"
        :key="team.teamId"
    >
      <team-table :summoner-id="summonerId" :team="team" :match="match" :index="index" />
    </v-row>
  </div>
</template>

<script>
import TeamTable from "@/components/summoners/summonerInfo/TeamTable";

export default {
  components: {
    TeamTable
  },
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
  },
  methods: {
    getSummoner() {
      let array = this.match.teams[0].summoners.concat(this.match.teams[1].summoners)
      return array.filter(summoner => summoner.summoner.summonerId === this.summonerId)[0];
    }
  }
}
</script>