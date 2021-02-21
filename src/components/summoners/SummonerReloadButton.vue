<template>
  <v-btn
      color="primary"
      :loading="isLoading"
      :disabled="!canReload"
      @click="reloadSummoner"
  >
    <v-icon left>fa-sync</v-icon>
    Summoner aktualisieren
  </v-btn>
</template>

<script>

import * as dayjs from "dayjs";

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
      return dayjs().diff(dayjs(this.summoner.updatedAt), 'minute') >= 1
    }
  },
  methods: {
    reloadSummoner() {
      this.isLoading = true
      const params = {
        id: this.summoner.id
      }
      window.axios.get(`summoners/reload/${this.summoner.id}`, {params})
          .then(response => {
            this.$root.$snackbar.open(response.data.message);
            this.$emit('summonerReloaded')
          }).finally(() => this.isLoading = false)
    }
  }
}
</script>