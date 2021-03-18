<template>
  <v-card tile>
    <v-card-title>
      {{ label }}
      <v-spacer />
      <close-button @close="close" />
    </v-card-title>
    <v-divider />
    <v-card-text>
      <view-form v-model="view" :validation-errors="errors" />
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
</template>

<script>
import CloseButton from '@/components/cardActions/CloseButton'
import ResetSaveAction from "@/components/cardActions/ResetSaveAction";
import ViewForm from "@/components/views/ViewForm";
import ValidationErrors from "@/mixins/ValidationErros";
import {cloneDeep} from "lodash";


export default {
  components: {
    ResetSaveAction,
    CloseButton,
    ViewForm
  },
  mixins: [ValidationErrors],
  props: {
    label: {
      type: String,
      required: true
    },
    viewId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isLoading: false,
      view: {
        title: null,
        body: null
      },
      originalView: {
        title: null,
        body: null
      }
    };
  },

  computed: {
    canSubmit() {
      return !!this.view.title && !!this.view.body && this.hasChanges;
    },
    hasChanges() {
      return this.view.title !== this.originalView.title
          || this.view.body !== this.originalView.body;
    },
  },
  created() {
    this.getView();
  },
  methods: {
    getView() {
      this.isLoading = true;
      window.axios
          .get(`/views/${this.viewId}`)
          .then((response) => {
            this.view = cloneDeep(response.data.data);
            this.originalView = cloneDeep(response.data.data);
          })
          .finally(() => (this.isLoading = false));
    },
    submit() {
      this.isLoading = true;
      this.errors = {};
      const params = {
        title: this.view.title,
        body: this.view.body
      };
      window.axios
          .put(`/views/${this.viewId}`, params)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
            this.view = cloneDeep(response.data.view);
            this.originalView = cloneDeep(response.data.view);
            this.clear();
            this.$emit('reload');
          })
          .catch(this.syncErrors)
          .finally(() => (this.isLoading = false));
    },
    clear() {
      this.view = cloneDeep(this.originalView);
    },
    close() {
      this.$emit('close');
    }
  }
};
</script>