<template>
  <v-card>
    <v-img
      :src="champion.splashArt"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
      <v-card-text class="text-body-1 pa-1">
        <v-row
          no-gutters
          class="justify-center"
        >
          <v-col
            cols="3"
            class="pr-1"
          >
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-img
                  :src="spell1.image"
                  v-on="on"
                />
              </template>
              <span v-html="spell1.tooltip" />
            </v-tooltip>
          </v-col>
          <v-col
            cols="3"
            class="pl-1"
          >
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-img
                  :src="spell2.image"
                  v-on="on"
                />
              </template>
              <span v-html="spell2.tooltip" />
            </v-tooltip>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col
            cols="3"
          >
            <v-img
              :src="summonerIcon"
            />
          </v-col>
          <v-col
            cols="9"
            class="text-left d-flex align-center pl-1"
          >
            {{ summonerName }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-img>
  </v-card>
</template>

<script>

import Permissions from '@/mixins/Permissions';

export default {
  mixins: [Permissions],
  props: {
    summonerName: {
      required: true,
      type: String
    },
    champion: {
      required: true,
      type: Object
    },
    summonerIcon: {
      required: true,
      type: String
    },
    spell1: {
      required: true,
      type: Object
    },
    spell2: {
      required: true,
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {
  },
  methods: {}
};
</script>