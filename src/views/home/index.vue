<template>
  <v-card tile>
    <v-card-text class="px-0 pt-0">
      <v-parallax
        :src="require('@/assets/backgrounds/blank.jpg')"
        class="d-flex justify-center align-center"
      >
        <img
          :src="require('@/icons/logo.svg')"
          style="width: 95%; max-width: 825px"
          alt=""
        />
      </v-parallax>
      <div class="mx-auto mt-16 mb-12" style="max-width: 1300px">
        <div class="text-center text-h3">
          Willkommen bei Alles im Rudel!
        </div>
        <p class="text-h5 mt-8">
          Moin und herzlich Willkommen auf der offiziellen Seite von Alles im Rudel!
          <br/>Wir sind ein Verein mit Sitz in Elmshorn und wachsen stetig.
          <br/>
          <br/>Schau doch mal bei unseren Vereinssparten vorbei!
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
    <v-divider/>
    <news/>
    <das-rudel/>
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
  },
  data() {
    return {
      active: 1,
      posts: []
    };
  },
  computed: {
    link() {
      return this.active === 1 ? '/#/branches?activeTab=airsoft' : '/#/branches?activeTab=gaming'
    }
  }
};
</script>