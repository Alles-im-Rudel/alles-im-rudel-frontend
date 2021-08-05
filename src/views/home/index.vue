<template>
  <v-card tile>
    <v-card-text class="px-0 pt-0">
      <v-parallax
          :src="require('@/assets/backgrounds/blank.jpg')"
          alt="Alles im Rudel Hintergrund ohne Wölfe"
          class="d-flex justify-center align-center"
      >
        <div class="d-flex justify-center align-center">
          <img
              :src="require('@/icons/logo.png')"
              style="width: 95%; max-width: 825px"
              alt="Alles im Rudel Wölfe"
          />
        </div>
      </v-parallax>
      <div class="mx-auto mt-16 mb-12" style="max-width: 1300px">
        <div class="text-center text-h3">
          Willkommen bei Alles im Rudel!
        </div>
        <p class="text-h5 mt-8">
          Hallo und herzlich willkommen auf unserer offiziellen Homepage.
          <br />
          <br />Wir sind ein stetig wachsender Verein mit Sitz in Elmshorn, der unter anderem mehrere Vereinssparten
          beschäftigt.
          <br />
          <br />Schau doch mal bei unseren Vereinssparten vorbei!
        </p>
        <v-btn
            class="mt-4"
            @click="pushRouteTo('branches')"
            text
        >
          Zu den Sparten
        </v-btn>
      </div>
    </v-card-text>
    <v-divider />
    <news />
    <das-rudel />
  </v-card>
</template>
<script>
import DasRudel from "./parts/DasRudel";
import News from "./parts/News";

export default {
  name: 'Home',
  components: {
    News,
    DasRudel,
  }
};
</script>