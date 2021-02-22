<template>
  <base-card v-if="summoner.id">
    <v-card-title>
      {{ summoner.name }}
      <v-spacer />
      <summoner-reload-button :summoner="summoner" @summonerReloaded="$emit('summonerReloaded')" />
      <summoner-entries-button :summoner="summoner" @summonerReloaded="$emit('summonerReloaded')" />
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
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
              Aktualisiert um:
            </v-col>
            <v-col cols="12" lg="6">
              {{ summoner.updatedAt | dateTime }}
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
          <v-list color="rgba(255, 255, 255, 0.6)">
            <v-list-group
                v-for="leagueEntry in summoner.leagueEntries"
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
              <base-card>
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
</template>

<script>
import SummonerReloadButton from "@/components/summoners/SummonerReloadButton";
import SummonerEntriesButton from "@/components/summoners/SummonerEntriesButton";

export default {
  components: {
    SummonerReloadButton,
    SummonerEntriesButton
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