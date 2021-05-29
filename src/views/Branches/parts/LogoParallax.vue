<template>
  <div>
    <v-parallax
      v-if="activeTab === 'airsoft'"
      src="/assets/backgrounds/airsoft.jpg"
      class="d-flex justify-center align-center"
    >
      <img
        :src="require('@/icons/logoWhite.svg')"
        style="width: 95%; max-width: 825px;"
        class="pb-2"
        alt=""
      />
    </v-parallax>

    <v-parallax
      v-if="activeTab === 'gaming'"
      src="/assets/backgrounds/e-sports.jpg"
      class="d-flex justify-center align-center"
    >
      <img
        :src="require('@/icons/logo.svg')"
        style="width: 95%; max-width: 825px;"
        class="pb-2"
        alt=""
      />
    </v-parallax>
  </div>
</template>

<script>
export default {
  props: {
    activeTab: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>