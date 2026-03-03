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
      class="banner asmoc-banner mb-8"
    >
      <img
        src="/assets/sponsors/asmoc/armyshopLogoklein3.jpg"
        alt="Armyshop Lübeck - Banner"
      >
    </div>

    <div
      v-if="showAirsoft"
      class="d-sm-flex align-center justify-center d-block"
    >
      <div class="banner pyrolager-banner mx-auto mx-sm-0">
        <img
          src="/assets/sponsors/pyrolager/pyrolager.png"
          alt="Pyrolager"
        >
      </div>

      <div class="banner laserpatch-banner mx-auto mx-sm-0">
        <img
          src="/assets/sponsors/laserpatch/laserpatch.jpg"
          alt="Laserpatch"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnerLogos',
  props: {
    showOnly: {
      required: false,
      type: Array,
      default: () => ['general', 'airsoft', 'gaming'],
    }
  },
  computed: {
    showGeneral() {
      return this.showOnly.includes('general');
    },
    showAirsoft() {
      return this.showOnly.includes('airsoft');
    },
    showGaming() {
      return this.showOnly.includes('gaming');
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

  .asmoc-banner {
    margin:0 auto;
    max-width:650px
  }

  .pyrolager-banner {
    max-width: 220px;
  }

  .laserpatch-banner {
    max-width: 220px;
  }
}
</style>
