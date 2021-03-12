<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <tag-select v-model="post.tags" />
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12" md="12" lg="6">
            <v-text-field
                v-model="post.title"
                label="Title"
                :error="hasErrors('title')"
                :error-messages="getErrors('title')"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-textarea
                v-model="post.text"
                label="Text"
                :error="hasErrors('text')"
                :error-messages="getErrors('text')"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <image-upload
            v-model="newImage"
        />
        <v-btn
            color="darkGrey"
            dark
            :disabled="canUseImage"
            @click="useImage"
        >
          Bild benutzen
        </v-btn>
      </v-col>
      <v-col
          v-for="(image, index) in post.images"
          :key="index"
          cols="12"
          lg="2"
      >
        <image-preview
            :file="image.file"
            :title="image.title"
        />
        <v-btn
            @click="removeImage(index)"
        >
          Entfernen
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ValidationErrors from "@/mixins/ValidationErros";
import ImageUpload from "@/components/images/ImageUpload";
import ImagePreview from "@/components/images/ImagePreview";
import TagSelect from "@/components/selects/TagSelect";

export default {
  mixins: [ValidationErrors],
  components: {
    ImageUpload,
    ImagePreview,
    TagSelect
  },
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
      newImage: {
        title: null,
        file: null
      }
    };
  },
  computed: {
    canUseImage() {
      return !this.newImage.file
    }
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
  methods: {
    useImage() {
      this.post.images.push(this.newImage);
      this.newImage = {
        title: null,
        file: null
      }
    },
    removeImage(index) {
      this.post.images.splice(index, 1)
    }
  }
};
</script>