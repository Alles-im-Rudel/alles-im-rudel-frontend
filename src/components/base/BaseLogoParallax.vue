<template>
  <v-parallax
    :src="background"
    class="d-flex justify-center align-center"
  >
    <div class="d-flex justify-center align-center">
      <img
        :src="logo"
        style="width: 95%; max-width: 825px;"
        class="pb-2"
        alt="logo"
      >
    </div>
  </v-parallax>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      required: true,
      default: null
    },
    logo: {
      type: String,
      required: true,
      default: null
    }
  }
};
</script>