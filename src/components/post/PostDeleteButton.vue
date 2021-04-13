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
    <span>Post löschen</span>
  </v-tooltip>
</template>

<script>
import Permissions from '@/mixins/Permissions';
import {mapGetters} from 'vuex';

export default {
  mixins: [Permissions],
  props: {
    selectedPost: {
      type: Object,
      required: true,
      default: () => ({
        id: null,
        title: null,
        userId: null
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
      return this.checkAuth() &&
          (this.can('posts.delete') ||
              this.selectedPost.userId !== this.user.id
          );
    }
  },
  methods: {
    confirmDelete() {
      this.$root.$confirm
          .open(
              'Post löschen?',
              'Möchten Sie diesen Post "' +
              this.selectedPost.title +
              '" wirklich unwiederuflich löschen?',
              'error'
          )
          .then((confirm) => confirm && this.delete());
    },
    delete() {
      this.isLoading = true;
      window.axios
          .delete(`posts/${this.selectedPost.id}`)
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
