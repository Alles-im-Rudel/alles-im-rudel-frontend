<template>
  <v-btn
      color="primary"
      :loading="isLoading"
      :disabled="!canReload"
      @click="getSummonerEntries"
  >
    <v-icon left>fa-info</v-icon>
    Summoner Entries
  </v-btn>
</template>

<script>
export default {
  components: {},
  props: {
    summoner: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    canReload() {
      return true
    }
  },
  methods: {
    getSummonerEntries() {
      this.isLoading = true
      const params = {
        id: this.summoner.id
      }
      window.axios.get(`summoners/entries/${this.summoner.id}`, {params})
          .then(response => {
            this.$root.$snackbar.open(response.data.message);
            this.$emit('summonerReloaded')
          }).finally(() => this.isLoading = false)
    }
  }
}
</script>