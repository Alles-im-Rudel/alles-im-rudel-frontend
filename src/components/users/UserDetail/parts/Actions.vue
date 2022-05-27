<template>
  <v-card-actions>
    <v-btn
      v-if="!isMember && canSeeRejectButton"
      :loading="isLoading"
      color="error"
      @click="reject"
    >
      Ablehnen
    </v-btn>
    <v-spacer />
    <v-btn
      v-if="canSeeEditButton"
      color="primary"
      :to="`/management/users/${user.id}/edit`"
    >
      Benutzer bearbeiten
    </v-btn>
    <v-spacer />
    <v-btn
      v-if="!isMember && canSeeAcceptButton"
      :disabled="!user.emailVerifiedAt"
      color="success"
      :loading="isLoading"
      @click="accept"
    >
      Bestätigen
    </v-btn>
  </v-card-actions>
</template>

<script>
import Permissions from '@/mixins/Permissions';
import hasArrayDifferenz from '@/mixins/HasArrayDifferenz';

export default {
  mixins: [Permissions, hasArrayDifferenz],
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    canSeeEditButton() {
      return this.can('users.update') && !this.user.deletedAt;
    },
    isMember() {
     const isMemberOfAllesImRudel = this.user.branchUserMemberShips.find(branchUserMemberShip => {
        return branchUserMemberShip.branchId === 1 && branchUserMemberShip.isActive;
      });
      return !!isMemberOfAllesImRudel;

    },
    canSeeRejectButton() {
      return this.can('members.manage');
    },
    canSeeAcceptButton() {
      return this.can('members.manage');
    }
  },
  created() {
  },
  methods: {
    accept() {
      this.isLoading = true;
      window.axios
          .put(`manage-member-ship-applications/accept/${this.user.id}`)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
            this.close();
            this.$emit('reload');
          })
          .finally(() => (this.isLoading = false));
    },
    reject() {
      this.isLoading = true;
      window.axios
          .put(`manage-member-ship-applications/reject/${this.user.id}`)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
            this.close();
            this.$emit('reload');
          })
          .finally(() => (this.isLoading = false));
    },
    close() {
      this.$emit('close');
    }
  }
};
</script>
