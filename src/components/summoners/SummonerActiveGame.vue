<template>
  <v-card tile v-if="gameData && teamOne && teamTwo">
    <v-card-title>
      {{ gameData.gameMode }} / {{ gameData.gameType }} / {{ gameData.platformId }}
      {{ gameData.gameStartTime | dateTime }}
      <v-spacer />
      <close-button @close="$emit('close')" />
    </v-card-title>
    <v-divider />
    <v-card-text class="pa-1">
      <v-row no-gutters>
        <v-col
            style="width: calc(50%- 3px)"
        >
          <v-list-item>
            <v-list-item-content class="text-left">
              <v-list-item-title class="text-h5">Team 1</v-list-item-title>
              <v-list-item-subtitle class="text-h6">
                Bans
              </v-list-item-subtitle>
              <v-row>
                <v-col
                    cols="12"
                    md="1"
                    v-for="ban in teamOne.bans"
                    :key="ban.pickTurn"
                >
                  <v-img
                      max-width="50px"
                      :src=" ban.champion.icon"
                  />
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
          <v-row dense>
            <v-col
                cols="auto"
                style="max-width: 19.8%"
                v-for="participant in teamOne.participants"
                :key="participant.summonerId"
            >
              <summoner-champion-splash-art
                  :summoner-name="participant.summonerName"
                  :champion="participant.champion"
                  :summoner-icon="participant.profileIcon"
                  :spell1="participant.spell1"
                  :spell2="participant.spell2"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col
            cols="auto"
            style="width:6px"
            class="d-flex justify-center pa-0"
        >
          <v-divider vertical />
        </v-col>
        <v-col
            style="width: calc(50%- 3px)"
            class="text-end"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h5">Team 2</v-list-item-title>
              <v-list-item-subtitle class="text-h6">
                Bans
              </v-list-item-subtitle>
              <v-row justify="end">
                <v-col
                    cols="12"
                    md="1"
                    v-for="ban in teamTwo.bans"
                    :key="ban.pickTurn"
                >
                  <v-img
                      max-width="50px"
                      :src=" ban.champion.icon"
                  />
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
          <v-row dense justify="end">
            <v-col
                cols="auto"
                style="max-width: 19.8%"
                v-for="participant in teamTwo.participants"
                :key="participant.summonerId"
            >
              <summoner-champion-splash-art
                  :summoner-name="participant.summonerName"
                  :champion="participant.champion"
                  :summoner-icon="participant.profileIcon"
                  :spell1="participant.spell1"
                  :spell2="participant.spell2"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>

import Permissions from "@/mixins/Permissions";
import SummonerChampionSplashArt from "@/components/summoners/SummonerChampionSplashArt";
import CloseButton from "@/components/cardActions/CloseButton";

export default {
  mixins: [Permissions],
  components: {
    SummonerChampionSplashArt,
    CloseButton
  },
  props: {
    summoner: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      isLoading: false,
      gameData: {},
      teamOne: {
        participants: {},
        bans: {}
      },
      teamTwo: {
        participants: {},
        bans: {}
      }
    }
  },
  created() {
    this.getActiveGame()
  },
  computed: {},
  methods: {
    getActiveGame() {
      this.isLoading = true
      window.axios.get(`summoners/active-game/${this.summoner.id}`)
          .then(response => {
            this.gameData = response.data;
            this.teamOne = {
              participants: this.gameData.participants.filter(item => item.teamId === 1),
              bans: this.gameData.banData.filter(item => item.teamId === 1)
            }
            this.teamTwo = {
              participants: this.gameData.participants.filter(item => item.teamId === 2),
              bans: this.gameData.banData.filter(item => item.teamId === 2)
            }
          })
          .catch(error => {
            this.$root.$snackbar.open(error.response.data.message, 'error');
          })
          .finally(() => this.isLoading = false)
    }
  }
}
</script>