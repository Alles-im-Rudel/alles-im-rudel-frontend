<template>
  <div>
    <pdf
        v-for="i in numPages"
        :key="i"
        :src="src"
        :page="i"
        style="max-width: 1300px"
    />
  </div>
</template>

<script>

import pdf from 'vue-pdf'

let loadingTask = pdf.createLoadingTask('/pdf/satzung.pdf');

export default {
  components: {
    pdf
  },
  data() {
    return {
      src: loadingTask,
      numPages: undefined,
    }
  },
  mounted() {

    this.src.promise.then(pdf => {

      this.numPages = pdf.numPages;
    });
  }
}

</script>