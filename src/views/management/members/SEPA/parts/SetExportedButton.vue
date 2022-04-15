<template>
  <v-tooltip top>
    <template v-slot:activator="{ on: tooltip }">
      <v-btn
        color="primary"
        icon
        :loading="isLoading"
        @click="submit"
        v-on="{ ...tooltip }"
      >
        <v-icon>fa-check</v-icon>
      </v-btn>
    </template>
    <span>Übernommen</span>
  </v-tooltip>
</template>

<script>

export default {
  props: {
    branchUserMemberShip: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isLoading: false
    };
  },
  computed: {},
  methods: {
    submit() {
      this.isLoading = true;
      window.axios
          .put(`sepa-data/exported/${this.branchUserMemberShip.id}`)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
            this.reload();
            this.$emit('reload');
          })
          .finally(() => (this.isLoading = false));
    },
    reload() {
      this.$emit('reload');
    },
  }
};
</script>
