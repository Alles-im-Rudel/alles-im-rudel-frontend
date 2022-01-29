<template>
  <v-card tile>
    <v-card-text class="px-0 pt-0" v-once>
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
        <h1 class="text-center text-h3">
          Willkommen bei Alles im Rudel!
        </h1>
        <p class="text-h5 mt-8">
          Hallo und herzlich willkommen auf unserer offiziellen Homepage.
          <br />
          <br />Wir sind ein stetig wachsender Verein mit Sitz in Elmshorn, dessen Zweck es ist, sich für den Erhalt & die Förderung der sozialen Einheit „Alles im Rudel“ einzusetzen, zu welcher insbesondere unsere Vereinsmitglieder gehören.<br /> Dies geschieht vornehmlich durch einen regelmäßigen sozialen Austausch unserer Vereinsmitglieder, welcher grundsätzlich in den unterschiedlichsten Formen erfolgen kann.
          <br /><br />Unter anderem geschieht dies auch in den verschiedenen Vereinssparten, welche nach Bedarf von unseren Vereinsmitgliedern ins Leben gerufen werden können, um so dediziert spezielle Interessen abzubilden.
          <br /><br />Aktuell beschäftigen wir mehrere Vereinssparten, schau doch einfach mal bei diesen vorbei!
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
    <news />
    <das-rudel />
  </v-card>
</template>
<script>

export default {
  name: 'Home',
  components: {
    News: () => import("./parts/News"),
    DasRudel: () => import("./parts/DasRudel"),
  }
};
</script>