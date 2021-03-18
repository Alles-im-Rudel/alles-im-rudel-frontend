<template>
  <v-dialog v-model="showDialog" max-width="500">
    <template v-slot:activator="{ on: dialog }">
      <v-btn
          v-if="canSeeButton"
          color="darkGrey"
          icon
          v-on="{ ...dialog }"
      >
        <v-icon>fa-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        Kommentar
      </v-card-title>
      <v-card-text>
        <v-textarea
            v-model="comment"
            label="Kommentar"
        />
      </v-card-text>
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
import Permissions from "@/mixins/Permissions";

export default {
  components: {
    ResetSaveAction
  },
  mixins: [Permissions],
  props: {
    postId: {
      type: Number,
      required: false,
      default: () => null
    },
    commentId: {
      type: Number,
      required: false,
      default: () => null
    }
  },
  data() {
    return {
      showDialog: false,
      comment: null,
      isLoading: false
    };
  },

  computed: {
    canSeeButton() {
      return this.can('comments.create');
    },
    canSubmit() {
      return !!this.comment && this.hasChanges;
    },
    hasChanges() {
      return !!this.comment;
    }
  },
  methods: {
    submit() {
      this.isLoading = true;
      const params = {
        comment: this.comment,
      };
      if (this.postId) {
        params.modelId = this.postId;
        params.modelType = 'App\\Models\\Post'
      }
      if (this.commentId) {
        params.modelId = this.commentId;
        params.modelType = 'App\\Models\\Comment'
      }
      window.axios
          .post('comments', params)
          .then((response => {
            this.$root.$snackbar.open(response.data.message);
            this.clear();
            this.$emit('reload');
            this.showDialog = false;
          }))
          .catch(error => {
            this.$root.$snackbar.open(error.response.data.message, 'error');
          })
          .finally(() => this.isLoading = false);
    },
    clear() {
      this.comment = null;
    }
  }
};
</script>