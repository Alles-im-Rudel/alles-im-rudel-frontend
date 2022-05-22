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
    <span>Benutzergruppe löschen</span>
  </v-tooltip>
</template>

<script>
import Permissions from '@/mixins/Permissions';

export default {
  mixins: [Permissions],
  props: {
    selectedUserGroup: {
      type: Object,
      required: true,
      default: () => ({
        id: null,
        displayName: null
      })
    }
  },
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    canSeeButton() {
      return (
          this.can('users.delete')
      );
    }
  },
  methods: {
    confirmDelete() {
      this.$root.$confirm
          .open(
              'Benutzergruppe löschen?',
              'Möchten Sie diese Benutzergruppe "' +
              this.selectedUserGroup.displayName +
              '" wirklich löschen?',
              'error'
          )
          .then((confirm) => confirm && this.delete());
    },
    delete() {
      this.isLoading = true;
      const params = {
        userGroupId: this.selectedUserGroup.id
      };
      window.axios
          .delete(`user-groups/${this.selectedUserGroup.id}`, { params })
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
          })
          .finally(() => {
            this.isLoading = false;
            this.$emit('user-group-was-deleted');
          });
    }
  }
};
</script>
