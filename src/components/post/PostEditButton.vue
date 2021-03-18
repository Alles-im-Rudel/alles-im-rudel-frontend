<template>
  <v-dialog v-model="showDialog" fullscreen>
    <template v-slot:activator="{ on: dialog }">
      <v-tooltip top>
        <template v-slot:activator="{ on:tooltip }">
          <v-btn
              v-if="canSeeButton"
              color="darkGrey"
              dark
              icon
              v-on="{ ...dialog, ...tooltip}"
          >
            <v-icon>fa-edit</v-icon>
          </v-btn>
        </template>
        <span>Post bearbeiten</span>
      </v-tooltip>
    </template>
    <v-card tile>
      <v-card-title>
        Post {{ post.title }} bearbeiten
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
import {cloneDeep} from 'lodash';

export default {
  mixins: [ValidationErrors, Permissions],
  components: {
    ResetSaveAction,
    PostForm,
    CloseButton
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showDialog: false,
      isLoading: false,
      post: cloneDeep(this.value),
      originalPost: cloneDeep(this.value)
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
          .put(`posts/${this.post.id}`, params)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
            this.clear();
            this.post = cloneDeep(response.data.post);
            this.originalPost = cloneDeep(response.data.post);
            this.$emit('reload');
          })
          .catch(this.syncErrors)
          .finally(() => this.isLoading = false);
    },
    clear() {
      this.post = cloneDeep(this.originalPost);
    },
    close() {
      this.showDialog = false
    }
  }
};
</script>