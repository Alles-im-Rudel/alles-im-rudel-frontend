<template>
  <v-card>
    <v-img
        :src="champion.splashArt"
        class="white--text align-end"
    >
      <v-card-text>
        <v-row no-gutters>
          <v-col cols="6" class="text-body-1">
            {{ champion.name }}
          </v-col>
          <v-col cols="5">
            {{ championData.championLevel }}<br>
            {{ getWithPoints(championData.championPoints) }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-img>
  </v-card>
</template>

<script>

export default {
  props: {
    champion: {
      required: true,
      type: Object
    },
    championData: {
      required: true,
      type: Object
    }
  },
  data() {
    return {}
  },
  created() {
  },
  computed: {},
  methods: {
    getWithPoints(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
}
</script>