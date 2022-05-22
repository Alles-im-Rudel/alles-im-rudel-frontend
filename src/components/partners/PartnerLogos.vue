<template>
  <div class="partner-logos">
    <div
      v-if="showGeneral"
      class="banner henry-krohn-banner mb-8"
    >
      <img
        src="/assets/sponsors/henry-krohn/henry-krohn.png"
        alt="Henry-Krohn-Banner"
      >
    </div>

    <div
      v-if="showAirsoft"
      class="banner begadi-banner mb-8"
    >
      <img
        src="/assets/sponsors/begadi/begadi_horizontal.jpg"
        alt="Begadi-Banner"
      >
    </div>

    <div
      v-if="showAirsoft"
      class="banner bad-agency-banner mb-8"
    >
      <img
        src="/assets/sponsors/bad-agency/bad-agency.png"
        alt="Bad-Agency-Banner"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnerLogos',
  props:{
    showOnly:{
      required: false,
      type: Array,
      default: () => ['general', 'airsoft', 'esports'],
    }
  },
  computed: {
    showGeneral(){
      return this.showOnly.includes('general');
    },
    showAirsoft(){
      return this.showOnly.includes('airsoft');
    },
    showESports(){
      return this.showOnly.includes('esports');
    },
  }
};
</script>

<style lang="scss">
.partner-logos {
  .banner {
    img {
      width: 100%;
    }
  }

  .henry-krohn-banner {
    margin: 0 auto;
    max-width: 650px;
    width: 90%;
  }

  .begadi-banner {
    margin: 0 auto;
    max-width: 650px;
  }

  .bad-agency-banner {
    margin: 0 auto;
    max-width: 300px;
  }
}
</style>