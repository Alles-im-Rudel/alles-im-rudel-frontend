<template>
  <base-card>
    <v-card-title class="headline">
      Profil Bild
    </v-card-title>
    <v-divider />
    <v-card-text>
      <image-upload v-model="file" @clear="clear" />
      <v-row>
        <v-col cols="6">
          <v-img
              class="black--text align-end"
              :src="user.image.image"
          >
            <v-card-title style="background-color: rgba(255, 255, 255, 0.2)">
              {{ user.image.title }}
            </v-card-title>
          </v-img>
        </v-col>
      </v-row>
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
      file: {
        file: null,
        title: null
      }
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
      request.append('image', this.file.file);
      request.append('title', this.file.title);
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
      this.file = {
        file: null,
        title: null
      }
    },
  }
};
</script>
