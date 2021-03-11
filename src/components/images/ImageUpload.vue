<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6">
        <v-file-input
            v-model="file"
            color="primary"
            counter
            :error="hasErrors('image')"
            :error-messages="getErrors('image')"
            label="Bild auswählen"
            placeholder="Bild auswählen"
            prepend-icon=""
            :accept="allowedTypes.join(',')"
            prepend-inner-icon="fa-file-image"
            outlined
            :show-size="1000"
            @change="transformToBase64"
            @click:clear="clear"
        >

        </v-file-input>
      </v-col>
      <v-scale-transition>
        <v-col v-if="imageBase64" cols="12" lg="6" class="image-preview">
          Preview
          <v-img contain max-height="400" class="preview" :src="imageBase64" />
        </v-col>
      </v-scale-transition>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6">
          <image-edit-card
              v-if="image"
              :image="image"
              @deleted="$emit('reload')"
          />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ValidationErrors from '@/mixins/ValidationErros';
import ImageEditCard from "@/components/images/ImageEditCard";

export default {
  components: {
    ImageEditCard
  },
  mixins: [ValidationErrors],
  props: {
    value: {
      type: [File, null],
      rquired: true
    },
    image: {
      required: true
    }
  },
  data() {
    return {
      isLoading: false,
      file: this.value,
      imageBase64: null,
      allowedTypes: ['image/png', 'image/jpeg', 'image/jpg']
    };
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.file = value;
        if (!value) {
          this.imageBase64 = null
        }
      }
    },
    file: {
      deep: true,
      handler(value) {
        this.$emit('input', value);
      },
    }
  },
  methods: {
    transformToBase64(file) {
      if (file && this.allowedTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = e => {
          this.imageBase64 = e.target.result;
        };
        return reader.readAsDataURL(file);
      }
      this.$root.$snackbar.open(`Type ${file.type} not allowed`, 'error');
    },
    clear() {
      this.imageBase64 = null;
      this.$emit('clear')
    }
  }
};
</script>
