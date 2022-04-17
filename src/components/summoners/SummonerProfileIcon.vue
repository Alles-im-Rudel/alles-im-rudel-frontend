<template>
  <v-img
    :src="summoner.profileIcon"
    class="white--text align-end rounded-circle"
  >
    <div class="text-center greyBlue">
      {{ summoner.summonerLevel }}
    </div>
  </v-img>
</template>

<script>
export default {
  components: {},
  props: {
    summoner: {
      type: Object,
      required: true
    }
  }
};
</script>