<template>
  <v-dialog
    v-model="showDialog"
    fullscreen
  >
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
            <v-icon small>
              fa-edit
            </v-icon>
          </v-btn>
        </template>
        <span>Post bearbeiten</span>
      </v-tooltip>
    </template>
    <v-card
      v-if="post"
      tile
    >
      <v-card-title>
        {{ post.title }}
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
      <BaseContainer>
        <reset-save-action
          :has-changes="hasChanges"
          :can-submit="canSubmit"
          :is-loading="isLoading"
          class="px-0"
          @submit="submit"
          @clear="clear"
        />
      </BaseContainer>
    </v-card>
  </v-dialog>
</template>

<script>
import ResetSaveAction from '@/components/cardActions/ResetSaveAction';
import PostForm from '@/components/post/PostForm';
import ValidationErrors from '@/mixins/ValidationErros';
import CloseButton from '@/components/cardActions/CloseButton';
import {mapGetters} from 'vuex';
import Permissions from '@/mixins/Permissions';

export default {
  components: {
    ResetSaveAction,
    PostForm,
    CloseButton
  },
  mixins: [ValidationErrors, Permissions],
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
      post: {
        title: this.value.title,
        text: this.value.text,
        tagId: this.value.tag.id,
        image: null
      },
      originalPost: {
        title: this.value.title,
        text: this.value.text,
        tagId: this.value.tag.id,
        image: null
      },
    };
  },
  computed: {
    ...mapGetters('auth', ['user', 'isAuth']),
    canSubmit() {
      return this.post.title &&
        this.post.text &&
        this.post.tagId &&
        this.hasChanges;
    },
    hasChanges() {
      return this.post.text !== this.originalPost.text ||
        this.post.title !== this.originalPost.title ||
        this.post.tagId !== this.originalPost.tagId ||
        !!this.post.image;
    },
    canSeeButton() {
      return this.can('posts.create');
    }
  },
  methods: {
    submit() {
      this.isLoading = true;
      this.clearErrors();

      const request = new FormData();
      const config = {headers: {'Content-Type': 'multipart/form-data'}};
      request.append('title', this.post.title);
      request.append('text', this.post.text);
      request.append('tagId', this.post.tagId);
      if (this.post.image) {
        request.append('image', this.post.image);
      }

      window.axios
        .post(`posts/${this.value.id}`, request, config)
        .then(() => {
          this.$root.$snackbar.open('Der Post wurde erfolgreich gespeichert.');
          this.$emit('reload');
          this.close();
        })
        .catch(this.syncErrors)
        .finally(() => this.isLoading = false);
    },
    clear() {
      this.post = {
        title: this.value.title,
        text: this.value.text,
        tagId: this.value.tag.id,
        image: null
      };
    },
    close() {
      this.showDialog = false;
    }
  }
};
</script>