<template>
  <div class="white">
    <v-parallax
      src="/assets/backgrounds/default.jpg"
      alt=""
      class="d-flex justify-center align-center"
    >
      <VueAnimation type="fade-in">
        <div class="d-flex justify-center align-center">
          <img
            src="/assets/logos/logo-slim.png"
            style="width: 95%; max-width: 825px"
            alt="Alles im Rudel Wölfe"
          >
        </div>
      </VueAnimation>
    </v-parallax>
    <BaseContainer class="mt-14 mb-16 text-center">
      <VueAnimation type="fade-in">
        <h1 class="text-h3 text-sm-h2">
          Willkommen
        </h1>
        <BaseParagraph class="mt-4 mb-0">
          bei Alles im Rudel e.V.
        </BaseParagraph>
      </VueAnimation>
      <VueAnimation type="fade-in">
        <BaseParagraph>
          <br>Wir sind ein stetig wachsender Verein mit Sitz in Elmshorn, dessen Zweck es ist, sich für den Erhalt & die
          Förderung der sozialen Einheit „Alles im Rudel“ einzusetzen, zu welcher insbesondere unsere Vereinsmitglieder
          gehören.
          <br>Dies geschieht vornehmlich durch einen regelmäßigen sozialen Austausch unserer Vereinsmitglieder, welcher
          grundsätzlich in den unterschiedlichsten Formen erfolgen kann.
          <br>
          <br>Unter anderem geschieht dies auch in den verschiedenen Vereinssparten, welche nach Bedarf von unseren
          Vereinsmitgliedern ins Leben gerufen werden können, um so dediziert spezielle Interessen abzubilden.
        </BaseParagraph>
      </VueAnimation>
    </BaseContainer>
    <News />
    <About />
  </div>
</template>

<script>
import News from '@/views/home/parts/News';
import About from '@/views/home/parts/About';

export default {
  name: 'Home',
  components: {
    News,
    About
  }
};
</script>