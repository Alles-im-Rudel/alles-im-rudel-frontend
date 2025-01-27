<template>
  <BaseContainer class="my-14">
    <h2 class="text-h4 mt-md-6">
      Welche Funkausrüstung empfehlt ihr?
    </h2>

    <v-row class="mb-4 mt-8">
      <v-col
        cols="12"
        lg="6"
      >
        <v-row class="d-flex align-center">
          <v-col
            cols="12"
            sm="4"
            lg="5"
          >
            <img
              src="/assets/branches/airsoft/guides/funk2.png"
              alt="Funk 2"
              class="radio-guide-image"
            >
          </v-col>

          <v-col
            cols="12"
            sm="8"
            lg="7"
          >
            <RadioGuideLine
              title="Sordin Supreme Pro-X"
              text="Aktiv Gehörschutz"
            />

            <RadioGuideLine
              title="Albrecht AE 32 CL2"
              text="Mikro / Ohrstöpsel / PTT"
            />

            <RadioGuideLine
              title="Midland G9 Pro"
              text="Wenig Reichweite / längere Akkulaufzei"
            />
          </v-col>
        </v-row>
      </v-col>

      <v-col
        cols="12"
        lg="6"
      >
        <v-row class="d-flex align-center">
          <v-col
            cols="12"
            sm="8"
            lg="7"
            class="text-sm-right"
          >
            <v-col
              cols="12"
              sm="4"
              lg="5"
              class="d-block d-sm-none mb-3"
            >
              <img
                src="/assets/branches/airsoft/guides/funk1.png"
                alt="Funk 1"
                class="radio-guide-image"
              >
            </v-col>

            <RadioGuideLine
              title="EARMOR - M32H MOD4"
              text="aktiver Gehörschutz / Mikrofon"
            />

            <RadioGuideLine
              title="PTT Midland"
              text="Push-to-Talk Schalter"
            />

            <RadioGuideLine
              title="Midland G9 Pro"
              text="Wenig Reichweite / längere Akkulaufzei"
            />
          </v-col>

          <v-col
            cols="12"
            sm="4"
            lg="5"
            class="d-none d-sm-block"
          >
            <img
              src="/assets/branches/airsoft/guides/funk1.png"
              alt="Funk 1"
              class="radio-guide-image"
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </BaseContainer>
</template>
<script>
import RadioGuideLine from './RadioGuideLine.vue';

export default {
  components: {RadioGuideLine}
};
</script>

<style lang="scss" scoped>
.radio-guide-image {
  width: 100%;
}

.radio-guide-description > ul > li {
  margin-bottom: 12px;

  & ul li {
    margin-top: 4px;
  }
}
</style>
