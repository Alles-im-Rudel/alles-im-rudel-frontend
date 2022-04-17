<template>
  <v-card class="my-2 pr-3">
    <div class="d-flex align-center">
      <v-card flat>
        <v-card-title>
          {{ branchUserMemberShip.branch.name }}
        </v-card-title>
        <v-card-subtitle
          v-if="branchUserMemberShip.branch.id === 1"
          class="text-left pb-1"
        >
          Vereinsbeitrag: {{ branchUserMemberShip.branch.price || '0' }} €
        </v-card-subtitle>
        <v-card-subtitle
          v-else
          class="text-left pb-1"
        >
          Spartenbeitrag: {{ branchUserMemberShip.branch.price || '0' }} €
        </v-card-subtitle>
      </v-card>

      <v-spacer />
      <div v-if="branchUserMemberShip.branch.id !== 1">
        <v-btn
          v-if="isMember"
          :loading="isLoading"
          class="mt-3"
          color="error"
          @click="confirmLeave"
        >
          Sparte verlassen
        </v-btn>
        <v-btn
          v-if="wantsToLeave"
          :loading="isLoading"
          class="mt-3"
          @click="confirmCancelLeave"
        >
          Sparte doch nicht verlassen
        </v-btn>
        <v-btn
          v-if="wantsToJoin"
          :loading="isLoading"
          class="mt-3"
          @click="confirmCancelJoin"
        >
          Sparten beitritt abbrechen
        </v-btn>
      </div>
    </div>
  </v-card>
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
  computed: {
    isMember() {
      return this.branchUserMemberShip.state === 'isMember';
    },
    wantsToLeave() {
      return this.branchUserMemberShip.state === 'wantsToLeave';
    },
    wantsToJoin() {
      return this.branchUserMemberShip.state === 'wantsToJoin';
    }
  },
  methods: {
    confirmLeave() {
      this.$root.$confirm
          .open(
              'Sparte verlassen?',
              'Möchtest du die Sparte "' +
              this.branchUserMemberShip.branch.name +
              "\" wirklich verlassen?\n Der Austritt erfolgt zum Ende des Folgemonats.",
              'error',
          ).then((confirm) => confirm && this.leaveBranch());
    },
    leaveBranch() {
      this.isLoading = true;
       window.axios
          .put(`profile/leave-branch/${this.branchUserMemberShip.id}`)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
            this.reload();
          })
          .finally(() => this.isLoading = false);
    },
    confirmCancelLeave() {
      this.$root.$confirm
          .open(
              'Spartenaustritt abbrechen?',
              'Möchtest du den Austritt aus der Sparte "' +
              this.branchUserMemberShip.branch.name +
              '" wirklich abbrechen?',
              'error',
          ).then((confirm) => confirm && this.cancelBranch());
    },
    confirmCancelJoin() {
      this.$root.$confirm
          .open(
              'Spartebeitritt abbrechen?',
              'Möchtest du den Spartebeitritt der Sparte "' +
              this.branchUserMemberShip.branch.name +
              '" wirklich abbrechen?',
              'error',
          ).then((confirm) => confirm && this.cancelBranch());
    },
    cancelBranch() {
      this.isLoading = true;
      window.axios
          .put(`profile/cancel-branch/${this.branchUserMemberShip.id}`)
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