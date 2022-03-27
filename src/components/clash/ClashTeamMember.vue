<template>
  <BaseCard>
    <v-card-title class="pb-0">
      {{ clashMember.clashTeamRole.name }}
      <v-spacer />
      <img
        height="40px"
        :src="clashMember.clashTeamRole.image"
        alt="lane"
      >
    </v-card-title>
    <v-card-text
      v-if="clashMember.summonerId"
      class="ma-0 pa-0"
    >
      <BaseCard flat>
        <v-card-text class="ma-0 pa-0">
          <v-row class="ma-0 pa-0">
            <v-col
              class="ma-0 pa-0"
              cols="12"
            >
              <v-row class="ma-0 pa-0">
                <v-col
                  cols="12"
                  lg="6"
                >
                  <summoner-info-button :summoner="clashMember.summoner" />
                </v-col>
                <v-col
                  cols="12"
                  lg="6"
                >
                  <summoner-profile-icon :summoner="clashMember.summoner" />
                </v-col>
              </v-row>
            </v-col>
            <v-col
              v-if="clashMember.summoner.leagueEntries.length > 0"
              class="ma-0 pa-0"
              cols="12"
            >
              <v-list color="rgba(255, 255, 255, 0.6)">
                <v-list-group
                  v-for="leagueEntry in clashMember.summoner.leagueEntries"
                  :key="leagueEntry.id"
                  no-action
                >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title v-if="leagueEntry.queueType">
                        {{ leagueEntry.queueType.displayName }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </template>
                  <BaseCard flat>
                    <v-card-title>
                      {{ leagueEntry.tier }} {{ leagueEntry.rank }} - {{ leagueEntry.leaguePoints }}
                    </v-card-title>
                    <v-card-text>
                      <v-row dense>
                        <v-col
                          cols="12"
                          md="6"
                        >
                          Gespielt:
                        </v-col>
                        <v-col
                          cols="12"
                          md="6"
                        >
                          {{ leagueEntry.gamesPlayed }}
                        </v-col>
                        <v-col
                          cols="12"
                          md="6"
                        >
                          Gewonnen:
                        </v-col>
                        <v-col
                          cols="12"
                          md="6"
                        >
                          {{ leagueEntry.wins }}
                        </v-col>
                        <v-col
                          cols="12"
                          md="6"
                        >
                          Verloren:
                        </v-col>
                        <v-col
                          cols="12"
                          md="6"
                        >
                          {{ leagueEntry.losses }}
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </BaseCard>
                </v-list-group>
              </v-list>
            </v-col>
          </v-row>
        </v-card-text>
      </BaseCard>
    </v-card-text>
  </BaseCard>
</template>

<script>

import SummonerProfileIcon from '@/components/summoners/SummonerProfileIcon';
import SummonerInfoButton from '@/components/summoners/summonerInfo/SummonerInfoButton';

export default {
  components: {
    SummonerProfileIcon,
    SummonerInfoButton
  },
  props: {
    clashMember: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>