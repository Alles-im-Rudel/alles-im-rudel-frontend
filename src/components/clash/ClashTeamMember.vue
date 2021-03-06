<template>
  <base-card>
    <v-card-title class="pb-0">
      {{ clashMember.clashTeamRole.name }}
      <v-spacer />
      <img
          height="40px"
          :src="clashMember.clashTeamRole.image"
          alt="lane" />
    </v-card-title>
    <v-card-text class="ma-0 pa-0">
      <base-card flat>
        <v-card-text class="ma-0 pa-0">
          <v-row class="ma-0 pa-0">
            <v-col class="ma-0 pa-0" cols="12">
              <v-row class="ma-0 pa-0">
                <v-col cols="12" lg="6">
                  Name:
                </v-col>
                <v-col cols="12" lg="6">
                  <strong>{{ clashMember.summoner.name }}</strong>
                </v-col>
                <v-col cols="12" lg="6">
                  Profilbild Id:
                </v-col>
                <v-col cols="12" lg="6">
                  <strong>{{ clashMember.summoner.profileIconId }}</strong>
                </v-col>
                <v-col cols="12" lg="6">
                  Summoner Level:
                </v-col>
                <v-col cols="12" lg="6">
                  <strong>{{ clashMember.summoner.summonerLevel }}</strong>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="ma-0 pa-0" cols="12">
              <v-list color="rgba(255, 255, 255, 0.6)">
                <v-list-group
                    v-for="leagueEntry in clashMember.summoner.leagueEntries"
                    :key="leagueEntry.id"
                    no-action
                >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ leagueEntry.queueType.displayName }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </template>
                  <base-card flat>
                    <v-card-title>
                      {{ leagueEntry.tier }} {{ leagueEntry.rank }} {{ leagueEntry.leaguePoints }}
                    </v-card-title>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="6">
                          Gemes Gespielt:
                        </v-col>
                        <v-col cols="12" md="6">
                          {{ leagueEntry.gamesPlayed }}
                        </v-col>
                        <v-col cols="12" md="6">
                          Gewonnen:
                        </v-col>
                        <v-col cols="12" md="6">
                          {{ leagueEntry.wins }}
                        </v-col>
                        <v-col cols="12" md="6">
                          Verloren:
                        </v-col>
                        <v-col cols="12" md="6">
                          {{ leagueEntry.losses }}
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </base-card>
                </v-list-group>
              </v-list>
            </v-col>
          </v-row>
        </v-card-text>
      </base-card>
    </v-card-text>
  </base-card>
</template>

<script>

export default {
  components: {},
  props: {
    clashMember: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>