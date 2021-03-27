<template>
  <v-btn
      v-if="canSeeButton"
      :color="color"
      icon
      :loading="isLoading"
      v-on="on"
      @click="like"
  >
    <v-icon>fa-thumbs-up</v-icon>
  </v-btn>
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
      return true;
    },
    color() {
      return 'liked';
    }
  },
  methods: {
    like() {
      this.isLoading = true;
      window.axios
          .delete(`appointments/${this.selectedAppointment.id}`)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
          })
          .finally(() => {
            this.isLoading = false;
          });
    }
  }
};
</script>
