<template>
  <v-card tile>
    <v-card-title>
      {{ summoner.name }}
      <v-spacer />
      <close-button @close="$emit('close')" />
    </v-card-title>
    <v-divider />
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <match-history :summoner="summoner" />
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <champion-collection :summoner="summoner" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CloseButton from '@/components/cardActions/CloseButton';
import ChampionCollection from '@/components/summoners/summonerInfo/ChampionCollection';
import MatchHistory from '@/components/summoners/summonerInfo/MatchHistory';

export default {
  components: {
    CloseButton,
    ChampionCollection,
    MatchHistory
  },
  props: {
    summoner: {
      required: true,
      type: Object
    }
  },
};
</script>