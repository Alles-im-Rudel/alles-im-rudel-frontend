<template>
  <base-card>
    <v-card-title class="headline">
      Profil Bild
    </v-card-title>
    <v-divider />
    <v-card-text>
      <image-upload v-model="file" :image="user.image" @reload="$emit('reload')" @clear="clear" />
    </v-card-text>
    <v-divider />
    <reset-save-action
        :is-loading="isLoading"
        :can-submit="canSubmit"
        :has-changes="hasChanges"
        @submit="submit"
        @clear="clear"
    />
  </base-card>
</template>
<script>
import {cloneDeep} from 'lodash';
import ValidationErrors from '@/mixins/ValidationErros'
import ResetSaveAction from '@/components/cardActions/ResetSaveAction';
import ImageUpload from "@/components/images/ImageUpload";

export default {
  components: {
    ResetSaveAction,
    ImageUpload
  },
  mixins: [ValidationErrors],
  props: {
    originalUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      user: cloneDeep(this.originalUser),
      isLoading: false,
      errors: {},
      file: null
    };
  },
  computed: {
    canSubmit() {
      return !!this.file;
    },
    hasChanges() {
      return true;
    }
  },
  watch: {
    originalUser: {
      deep: true,
      handler(value) {
        this.user = cloneDeep(value);
      }
    },
  },
  methods: {
    submit() {
      this.isLoading = true;
      this.clearErrors();
      const request = new FormData();
      const config = {headers: {'Content-Type': 'multipart/form-data'}};
      request.append('image', this.file);
      window.axios
          .post(`users/image/${this.originalUser.id}`, request, config)
          .then(response => {
            this.$root.$snackbar.open(response.data.message);
            this.$emit('reload')
            this.clear();
          })
          .catch(this.syncErrors)
          .finally(() => {
            this.isLoading = false;
          });
    },
    clear() {
      this.clearErrors();
      this.user = cloneDeep(this.originalUser);
      this.file = null;
    },
  }
};
</script>
