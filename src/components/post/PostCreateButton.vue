<template>
  <v-dialog
    v-model="showDialog"
    fullscreen
  >
    <template v-slot:activator="{ on: dialog }">
      <v-btn
        v-if="canSeeButton"
        color="darkGrey"
        dark
        v-on="{ ...dialog }"
      >
        <v-icon left>
          fa-plus
        </v-icon>
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
      <BaseContainer>
        <reset-save-action
          :can-submit="canSubmit"
          :is-loading="isLoading"
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
import ValidationErrors from '@/mixins/ValidationErrors';
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
  data() {
    return {
      showDialog: false,
      isLoading: false,
      post: {
        title: null,
        text: null,
        image: null,
        tagId: null,
      }
    };
  },

  computed: {
    ...mapGetters('auth', ['user', 'isAuth']),
    canSubmit() {
      return !!(
        this.post.title &&
        this.post.text &&
        this.post.image &&
        this.post.tagId
      );
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
      request.append('image', this.post.image);

      window.axios
        .post('posts', request, config)
        .then(() => {
          this.clear();
          this.$emit('reload');
          this.showDialog = false;
          this.$root.$snackbar.open('Der Post wurde erfolgreich erstellt.');
        })
        .catch(this.syncErrors)
        .finally(() => this.isLoading = false);
    },
    clear() {
      this.post = {
        title: null,
        text: null,
        tagId: null,
        image: null
      };
    },
    close() {
      this.showDialog = false;
    }
  }
};
</script>