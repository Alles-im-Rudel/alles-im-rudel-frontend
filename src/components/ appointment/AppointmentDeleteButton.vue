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
    <span>Löschen</span>
  </v-tooltip>
</template>

<script>
import Permissions from '@/mixins/Permissions';

export default {
  mixins: [Permissions],
  props: {
    selectedAppointment: {
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
    canSeeButton() {
      return this.can('appointments.delete');
    }
  },
  methods: {
    confirmDelete() {
      this.$root.$confirm
          .open(
              'Event löschen?',
              'Möchten Sie dieses Event "' +
              this.selectedAppointment.title +
              '" wirklich unwiederuflich löschen?',
              'error'
          )
          .then((confirm) => confirm && this.delete());
    },
    delete() {
      this.isLoading = true;
      window.axios
          .delete(`appointments/${this.selectedAppointment.id}`)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
          })
          .finally(() => {
            this.isLoading = false;
            this.$emit('deleted');
          });
    }
  }
};
</script>
