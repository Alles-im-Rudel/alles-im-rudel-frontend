<template>
  <v-img
      :src="summoner.profileIcon"
      class="white--text align-end"
      style="border-radius: 50%"
  >
    <div style="background: #495056">
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
}
</script>