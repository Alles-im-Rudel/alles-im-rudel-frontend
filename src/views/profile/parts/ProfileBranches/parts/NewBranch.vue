<template>
  <v-card class="my-2 pr-3">
    <div class="d-flex align-center">
      <v-card flat>
        <v-card-title>
          {{ branch.name }}
        </v-card-title>
        <v-card-subtitle class="text-left pb-1">
          Kosten: {{ branch.price || '0' }} €
        </v-card-subtitle>
      </v-card>

      <v-spacer />
      <v-btn
        class="mt-3"
        color="primary"
        :loading="isLoading"
        @click="confirmJoin"
      >
        Sparte beitreten
      </v-btn>
    </div>
  </v-card>
</template>

<script>

export default {
  props: {
    branch: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    confirmJoin() {
      this.$root.$confirm
          .open(
              'Sparte beitreten',
              'Möchtest du der Sparte "' +
              this.branch.name +
              '" wirklich einen Beitritsantrag schicken?',
              'primary',
          ).then((confirm) => confirm && this.joinBranch());
    },
    joinBranch() {
      this.isLoading = true;
      window.axios
          .put(`profile/join-branch/${this.branch.id}`)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
            this.reload();
          })
          .finally(() => this.isLoading = false);
    },
    reload() {
      this.$emit('reload');
    }
  }
};
</script>