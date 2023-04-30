<template>
  <div>
    <BaseSectionTitle>
      Guides
    </BaseSectionTitle>

    <BaseContainer class="my-14">
      <BaseParagraph>
        Hier haben wir dir eine kleine Liste mit Anleitungen zusammengestellt, die dir bei der Auswahl deiner Ausrüstung
        helfen könnten. Wenn wir alle mit kompatibler Ausrüstung ausgestattet sind, macht das Spielen am meisten Spaß!
      </BaseParagraph>
    </BaseContainer>

    <v-divider />

    <RadioCommunicationGuide />

    <v-divider />

    <RadioGuide />
  </div>
</template>

<script>
import RadioGuide from './parts/RadioGuide.vue';
import RadioCommunicationGuide from './parts/RadioCommunicationGuide.vue';

export default {
  components: {
    RadioCommunicationGuide,
    RadioGuide
  }
};
</script>