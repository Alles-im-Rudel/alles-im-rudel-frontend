<template>
  <v-badge
      color="greyBlue"
      :content="selectedAppointment.likes ? selectedAppointment.likes : '0'"
      overlap
  >
    <v-btn
        v-if="canSeeButton"
        :color="color"
        icon
        @click="change"
    >
      <v-icon>fa-thumbs-up</v-icon>
    </v-btn>
  </v-badge>
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
      isLoading: false,
      liked: false
    };
  },
  computed: {
    canSeeButton() {
      return true;
    },
    color() {
      return this.liked ? 'liked' : 'darkGrey';
    }
  },
  watch: {
    selectedAppointment: {
      deep: true,
      handler() {
        this.check();
      }
    }
  },
  created() {
    this.check();
  },
  methods: {
    check() {
      this.isLoading = true;
      window.axios
          .get(`appointments/${this.selectedAppointment.id}/check`)
          .then((response) => {
            this.liked = response.data.liked
          })
          .finally(() => {
            this.isLoading = false;
          });
    },
    change() {
      this.isLoading = true;
      window.axios
          .put(`appointments/${this.selectedAppointment.id}/change`)
          .then((response) => {
            this.liked = response.data.liked;
            this.$emit('reload');
          })
          .finally(() => {
            this.isLoading = false;
          });
    }
  }
};
</script>
