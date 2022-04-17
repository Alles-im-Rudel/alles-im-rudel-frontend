<template>
  <BaseContainer>
    <v-row>
      <v-col
        cols="12"
        md="3"
      >
        <tag-select
          v-model="post.tagId"
          :multiple="false"
        />
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="post.title"
          label="Titel"
          :error="hasErrors('title')"
          :error-messages="getErrors('title')"
        />

        <BaseEditor v-model="post.text" />
      </v-col>
      <v-col cols="12">
        <image-upload
          v-model="post.image"
        />
      </v-col>
    </v-row>
  </BaseContainer>
</template>

<script>
import ValidationErrors from '@/mixins/ValidationErrors';
import ImageUpload from '@/components/images/ImageUpload';
import TagSelect from '@/components/selects/TagSelect';

export default {
  components: {
    ImageUpload,
    TagSelect
  },
  mixins: [ValidationErrors],
  props: {
    value: {
      type: Object,
      required: true
    },
    validationErrors: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      post: this.value,
    };
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.post = value;
      }
    },
    post: {
      deep: true,
      handler(value) {
        this.$emit('input', value);
      },
    },
    validationErrors: {
      handler() {
        this.errors = this.validationErrors;
      },
      deep: true
    },
  },
};
</script>