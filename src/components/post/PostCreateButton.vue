<template>
  <v-dialog v-model="showDialog" fullscreen>
    <template v-slot:activator="{ on: dialog }">
      <v-btn
          color="darkGrey"
          dark
          v-on="{ ...dialog }"
      >
        <v-icon left>fa-plus</v-icon>
        Post
      </v-btn>
    </template>
    <v-card tile>
      <v-card-title>
        Post erstellen
        <v-spacer />
        <close-button @close="close" />
      </v-card-title>
      <v-divider />
      <v-card-text>
        <post-form
            v-model="post"
            :validation-errors="errors"
        />
      </v-card-text>
      <v-divider />
      <reset-save-action
          :has-changes="hasChanges"
          :can-submit="canSubmit"
          :is-loading="isLoading"
          @submit="submit"
          @clear="clear"
      />
    </v-card>
  </v-dialog>
</template>

<script>
import ResetSaveAction from "@/components/cardActions/ResetSaveAction";
import PostForm from "@/components/post/PostForm";
import ValidationErrors from "@/mixins/ValidationErros";
import CloseButton from '@/components/cardActions/CloseButton'

export default {
  mixins: [ValidationErrors],
  components: {
    ResetSaveAction,
    PostForm,
    CloseButton
  },
  data() {
    return {
      showDialog: false,
      isLoading: false,
      post: {
        title: null,
        text: null,
        tags: [],
        images: []
      }
    };
  },

  computed: {
    canSubmit() {
      return this.post.title &&
          this.post.text &&
          this.hasChanges;
    },
    hasChanges() {
      return this.post.text ||
          this.post.text ||
          this.post.images.length > 0 ||
          this.post.tags.length > 0;
    }
  },
  methods: {
    submit() {
      this.isLoading = true;
      this.clearErrors();
      const params = {
        comment: this.comment,
      };
      window.axios
          .post('posts', params)
          .then((response => {
            this.$root.$snackbar.open(response.data.message);
            this.clear();
            this.$emit('reload');
            this.showDialog = false;
          }))
          .catch(this.syncErrors)
          .finally(() => this.isLoading = false);
    },
    clear() {
      this.clearErrors();
      this.comment = null;
    },
    close() {
      this.showDialog = false
    }
  }
};
</script>