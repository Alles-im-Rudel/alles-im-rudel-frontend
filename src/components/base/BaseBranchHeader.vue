<template>
  <v-parallax
    :src="background"
    :height="$vuetify.breakpoint.lgAndUp ? '600' : '500'"
    class="base-branch-header"
  >
    <div class="pb-10">
      <div class="d-flex justify-center">
        <img
          src="/assets/logos/logo-white-slim.png"
          class="branch-header-image"
          alt="logo"
        >
      </div>
      <h1
        class="branch-title text-center mt-8"
        v-html="title"
      />
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
    title: {
      type: String,
      required: true,
      default: null
    }
  }
};
</script>

<style lang="scss">
.base-branch-header {
  .branch-title {
    font-size: 8rem !important;
    font-weight: 600;
    line-height: 6rem;
    font-family: "Roboto", sans-serif !important;
    letter-spacing: 18px !important;
    text-transform: uppercase;

    @media only screen and (max-width: 1264px) {
      & {
        font-size: 6rem !important;
      }
    }

    @media only screen and (max-width: 600px) {
      & {
        font-size: 3rem !important;
      }
    }
  }

  .branch-header-image {
    width: 40%;
    max-width: 150px;
  }
}
</style>