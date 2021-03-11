<template>
  <v-card>
    <v-card-title>
      {{ image.fileName }}
      <v-spacer />
      <v-btn
          :disabled="isLoading"
          color="error"
          icon
          large
          @click="confirmDelete"
      >
        <v-icon>fa-times</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-img :max-width="400" :src="image.image" />
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    image: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    confirmDelete() {
      this.$root.$confirm
          .open(
              'Bild Löschen',
              'Möchten Sie das Bild wirklich Löschen',
              'error'
          )
          .then(confirm => confirm && this.deleteImage());
    },
    deleteImage() {
      this.isLoading = true;
      this.axios
          .delete(`images/${this.image.id}`)
          .then(response => {
            this.$root.$snackbar.open(response.data.message);
            this.$emit('deleted');
          })
          .finally(() => (this.isLoading = false));
    }
  }
};
</script>
<style scoped></style>
