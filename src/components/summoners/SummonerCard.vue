<template>
  <base-card v-if="summoner.id">
    <v-card-title>
      {{ summoner.name }}
      <summoner-is-in-game-dot v-if="checkAuth" :summoner="summoner" />
      <summoner-info-button v-if="checkAuth" :summoner="summoner" />
      <v-spacer />
      <summoner-main-user-detach-button
          v-if="canDetachSummoner"
          :summoner="summoner"
          @summoner-detached="$emit('summoner-detached')"
      />
      <v-spacer />
      <summoner-reload-button
          v-if="canReload"
          :summoner="summoner"
          @summoner-reloaded="$emit('summoner-reloaded')"
      />
    </v-card-title>
    <v-divider />
    <v-card-text class="text-body-1">
      <v-row>
        <v-col cols="12" md="2">
          <v-list color="rgba(255, 255, 255, 0.1)">
            <v-list-item>
              <v-list-item-content>
                <summoner-profile-icon :summoner="summoner" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="10">
          <v-list color="rgba(255, 255, 255, 0.1)">
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
              <base-card flat>
                <v-card-title>
                  {{ leagueEntry.tier }} {{ leagueEntry.rank }} {{ leagueEntry.leaguePoints }}
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" md="6">
                      Games gespielt:
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
import SummonerMainUserDetachButton from "@/components/summoners/SummonerMainUserDetachButton";
import SummonerIsInGameDot from "@/components/summoners/SummonerIsInGameDot";
import SummonerInfoButton from "@/components/summoners/summonerInfo/SummonerInfoButton";
import Permissions from "@/mixins/Permissions";
import SummonerProfileIcon from "@/components/summoners/SummonerProfileIcon";

export default {
  components: {
    SummonerReloadButton,
    SummonerMainUserDetachButton,
    SummonerIsInGameDot,
    SummonerInfoButton,
    SummonerProfileIcon
  },
  mixins: [Permissions],
  props: {
    summoner: {
      required: true,
      type: Object
    },
    canDetachSummoner: {
      required: false,
      type: Boolean,
      default: () => false
    },
    canReload: {
      required: false,
      type: Boolean,
      default: () => true
    }
  },
  data() {
    return {}
  }
}
</script>