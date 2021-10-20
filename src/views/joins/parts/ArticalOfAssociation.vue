<template>
  <div
    v-if="isLoading"
    class="d-flex justify-center py-16"
  >
    <v-progress-circular indeterminate />
  </div>
  <div v-else>
    <pdf
        v-for="i in numPages"
        :key="i"
        :src="src"
        :page="i"
        style="max-width: 1000px; margin: auto;"
    />
  </div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  components: {
    pdf
  },
  data() {
    return {
      src: pdf.createLoadingTask('/pdf/verseionsatzung.pdf'),
      numPages: null,
      isLoading: true
    }
  },
  mounted() {
    this.src.promise.then(pdf => {
      this.numPages = pdf.numPages;
      this.isLoading = false;
    });
  }
}

</script>