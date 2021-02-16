<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <v-btn
          v-if="canSeeButton"
          color="error"
          icon
          :loading="isLoading"
          v-on="on"
          @click="confirmDelete"
      >
        <v-icon>fa-trash-alt</v-icon>
      </v-btn>
    </template>
    <span>Benutzer löschen</span>
  </v-tooltip>
</template>

<script>
import Permissions from '@/mixins/Permissions';
import { mapGetters } from 'vuex';

export default {
  mixins: [Permissions],
  props: {
    selectedUser: {
      type: Object,
      required: true,
      default: () => ({
        id: null,
        fullName: null,
        firstName: null,
        lastName: null,
        username: null,
        email: null,
        isActive: false
      })
    }
  },
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    ...mapGetters('auth', ['user']),
    canSeeButton() {
      return (
          this.can('users.delete') &&
          !this.selectedUser.deletedAt &&
          this.selectedUser.id !== this.user.id
      );
    }
  },
  methods: {
    confirmDelete() {
      this.$root.$confirm
          .open(
              'Benutzer löschen?',
              'Möchten Sie diesen Benutzer "' +
              this.selectedUser.fullName +
              '" wirklich löschen?',
              'error'
          )
          .then((confirm) => confirm && this.delete());
    },
    delete() {
      this.isLoading = true;
      const params = {
        userId: this.selectedUser.id
      };
      window.axios
          .delete(`users/${this.selectedUser.id}`, { params })
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
          })
          .finally(() => {
            this.isLoading = false;
            this.$emit('user-was-deleted');
          });
    }
  }
};
</script>
