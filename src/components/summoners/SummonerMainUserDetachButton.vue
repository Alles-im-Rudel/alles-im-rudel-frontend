<template>
  <v-btn
      color="error"
      :loading="isLoading"
      :disabled="!canReload"
      @click="detachMainUser"
  >
    <v-icon left>fa-unlink</v-icon>
    Main User entfernen
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
    detachMainUser() {
      this.isLoading = true
      const params = {
        id: this.summoner.id
      }
      window.axios.put(`summoners/detach-main-user/${this.summoner.id}`, params)
          .then(response => {
            this.$root.$snackbar.open(response.data.message);
            this.$emit('summoner-detached')
          }).finally(() => this.isLoading = false)
    }
  }
}
</script>