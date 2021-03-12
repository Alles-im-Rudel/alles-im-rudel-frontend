<template>
  <v-img v-if="imageBase64" :src="imageBase64" class="black--text align-end">
    <v-card-title v-if="title" style="background-color: rgba(255, 255, 255, 0.2)">
      {{ title }}
    </v-card-title>
  </v-img>
</template>
<script>

export default {
  props: {
    file: {
      type: File,
      rquired: true
    },
    title: {
      type: String,
      rquired: false,
      default: () => null
    }
  },
  data() {
    return {
      isLoading: false,
      imageBase64: null,
      allowedTypes: ['image/png', 'image/jpeg', 'image/jpg']
    };
  },
  created() {
    this.transformToBase64();
  },
  watch: {
    file: {
      deep: true,
      handler() {
        this.transformToBase64();
      }
    },
  },
  methods: {
    transformToBase64() {
      if (this.file && this.allowedTypes.includes(this.file.type)) {
        const reader = new FileReader();
        reader.onload = e => {
          this.imageBase64 = e.target.result;
        };
        return reader.readAsDataURL(this.file);
      }
      this.$root.$snackbar.open(`Type ${this.file.type} not allowed`, 'error');
    },
    clear() {
      this.imageBase64 = null;
      this.$emit('clear')
    }
  }
};
</script>
