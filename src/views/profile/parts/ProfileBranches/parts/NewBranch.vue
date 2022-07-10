<template>
  <v-card class="my-2 pr-3">
    <div class="d-flex align-center">
      <v-card flat>
        <v-card-title>
          {{ branch.name }}
        </v-card-title>
        <v-card-subtitle
          v-if="branch.id === 1"
          class="text-left pb-5"
        >
          Vereinsbeitrag: {{ branch.price || '0' }} €
        </v-card-subtitle>
        <v-card-subtitle
          v-else
          class="text-left pb-5"
        >
          Spartenbeitrag: {{ branch.price || '0' }} €
        </v-card-subtitle>
      </v-card>

      <v-spacer />
      <v-btn
        class="mt-3"
        color="primary"
        :loading="isLoading"
        :disabled="!wantsToLeaveAssocioation"
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
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    wantsToLeaveAssocioation() {
      return !this.user.branchUserMemberShips.find(item => item.branch.id === 1 && item.state === 'wantsToLeave');
    }
  },
  methods: {
    confirmJoin() {
      this.$root.$confirm
          .open(
              'Sparte beitreten',
              'Möchtest du der Sparte "' +
              this.branch.name +
              '" wirklich einen Beitrittsantrag schicken?',
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