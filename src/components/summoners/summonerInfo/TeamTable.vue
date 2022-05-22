<template>
  <v-row no-gutters>
    <v-col cols="9">
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Team {{ getTeam }}
              </th>
              <th />
              <th />
              <th>
                {{ getTotalKills(team.teamId) }} / {{ getTotalAssists(team.teamId) }} / {{
                  getTotalDeaths(team.teamId)
                }}
              </th>
              <th>
                Farm
              </th>
              <th>
                {{ getWithPoints(getTotalGold(team.teamId)) }}
                <v-icon small>
                  fa-coins
                </v-icon>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="summoner in team.summoners"
              :key="summoner.summonerId"
              @click="selectedSummoner = summoner"
            >
              <td>
                <v-img
                  class="rounded-circle"
                  :src="summoner.champion.icon"
                  max-width="30%"
                />
              </td>
              <td class="text-left">
                {{ summoner.summoner.name }}
              </td>
              <td>
                {{ summoner.stats.champLevel }}
              </td>
              <td>{{ summoner.stats.kills }} / {{ summoner.stats.assists }} / {{ summoner.stats.deaths }}</td>
              <td>{{ summoner.stats.neutralMinionsKilled + summoner.stats.totalMinionsKilled }}</td>
              <td>{{ getWithPoints(summoner.stats.goldEarned) }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
    <v-col cols="3">
      <detail-card :summoner="selectedSummoner" />
    </v-col>
  </v-row>
</template>

<script>
import DetailCard from '@/components/summoners/summonerInfo/DetailCard';

export default {
  components: {
    DetailCard
  },
  props: {
    match: {
      required: true,
      type: Object
    },
    summonerId: {
      type: String,
      required: true
    },
    team: {
      required: true,
      type: Object
    },
    index: {
      required: true,
      type: Number
    }
  },
  data() {
    return {
      selectedSummoner: {
        summoner: {
          summonerId: null
        }
      }
    };
  },
  computed: {
    getTeam() {
      return 1 + this.index;
    }
  },
  methods: {
    getTotalGold(teamId) {
      let total = 0;
      let team = this.match.teams.filter(team => team.teamId === teamId)[0];
      team.summoners.forEach(summoner => {
        total += summoner.stats.goldEarned;
      });
      return total;
    },
    getTotalKills(teamId) {
      let total = 0;
      let team = this.match.teams.filter(team => team.teamId === teamId)[0];
      team.summoners.forEach(summoner => {
        total += summoner.stats.kills;
      });
      return total;
    },
    getTotalAssists(teamId) {
      let total = 0;
      let team = this.match.teams.filter(team => team.teamId === teamId)[0];
      team.summoners.forEach(summoner => {
        total += summoner.stats.assists;
      });
      return total;
    },
    getTotalDeaths(teamId) {
      let total = 0;
      let team = this.match.teams.filter(team => team.teamId === teamId)[0];
      team.summoners.forEach(summoner => {
        total += summoner.stats.deaths;
      });
      return total;
    },
    getWithPoints(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
  }
};
</script>
<style scoped>
td, th {
  padding-left: 5px !important;
  padding-right: 5px !important;
}
</style>