<template>
  <v-dialog v-model="showDialog" fullscreen>
    <template v-slot:activator="{ on: dialog }">
      <v-btn
          v-if="canSeeButton"
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
import {mapGetters} from "vuex";
import Permissions from "@/mixins/Permissions";

export default {
  mixins: [ValidationErrors, Permissions],
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
    ...mapGetters('auth', ['user', 'isAuth']),
    canSubmit() {
      return this.post.title &&
          this.post.text &&
          this.hasChanges;
    },
    hasChanges() {
      return !!this.post.text ||
          !!this.post.title ||
          this.post.images.length > 0 ||
          this.post.tags.length > 0;
    },
    canSeeButton() {
      return this.can('posts.create');
    }
  },
  methods: {
    submit() {
      this.isLoading = true;
      this.clearErrors();
      const params = {
        title: this.post.title,
        text: this.post.text,
        tagIds: this.post.tags.map(tag => tag.id),
      };
      window.axios
          .post('posts', params)
          .then((response => {
            if (this.post.images.length > 0) {
              this.post.images.forEach((image, index) => {
                this.uploadImage(response.data.postId, image, index);
              });
            } else {
              this.$root.$snackbar.open('Der Post wurde erfolgreich erstellt.');
              this.clear();
              this.$emit('reload');
              this.showDialog = false;
            }
          }))
          .catch(this.syncErrors)
          .finally(() => this.isLoading = false);
    },
    uploadImage(postId, image, index) {
      this.isLoading = true;
      const request = new FormData();
      const config = {headers: {'Content-Type': 'multipart/form-data'}};
      request.append('file', image.file);
      if (image.title) {
        request.append('title', image.title);
      }
      window.axios
          .post(`posts/${postId}/image`, request, config)
          .then(() => {
            if (this.post.images.length === ++index) {
              this.isLoading = false;
              this.clear();
              this.$emit('reload');
              this.showDialog = false;
              this.$root.$snackbar.open('Der Post wurde erfolgreich erstellt.');
            }
          })
          .catch(this.syncErrors);
    },
    clear() {
      this.post = {
        title: null,
        text: null,
        tags: [],
        images: []
      }
    },
    close() {
      this.showDialog = false
    }
  }
};
</script>