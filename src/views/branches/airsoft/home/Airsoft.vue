<template>
  <div class="white branch-airsoft">
    <BaseBranchHeader
      background="/assets/backgrounds/airsoft.jpg"
      title="Airsoft"
    />

    <BaseContainer class="mt-14 pb-4">
      <v-row>
        <v-col
          class="pr-lg-6 pr-md-4"
          cols="12"
          md="8"
          lg="9"
        >
          <h2 class="text-h3 mt-md-6">
            Moin!
          </h2>
          <BaseParagraph class="mt-6 mt-sm-8">
            Wir sind eines der größten und am meisten organisierten Airsoft-Teams im Norden Deutschlands. Mit
            Mitgliedern aus dem Raum Schleswig-Holstein, Hamburg, Niedersachsen und Mecklenburg-Vorpommern. Mit breit
            aufgestellten, kompetenten, lokalen Ansprechpartnern.<br>
            Unsere vorrangige Mission ist es, den Airsoft-Sport für neue Spieler zugänglicher zu machen und bereits
            aktiven Spielern ein organisiertes Team zu bieten. Dabei legen wir den Fokus auf Teamplay, Taktik und in
            erster Linie Spaß und begrüßen auf herzliche Weise neue Spieler bei uns im Team.
            <br><br>
            Du findest uns auch im <a
              :href="airsoftUrl"
              target="_blank"
            >Airsoft-Verzeichnis</a>!
          </BaseParagraph>
        </v-col>

        <v-col
          cols="12"
          md="4"
          lg="3"
        >
          <div class="branch-leader-container">
            <BaseLeaderCard :leader="leader" />
          </div>
        </v-col>
      </v-row>

      <h2 class="text-h3 mt-12 mt-md-4">
        Interesse?
      </h2>
      <BaseParagraph class="mt-6 mt-md-8">
        Das können wir bieten:
        <ul class="mt-4">
          <li>Sponsoring durch Begadi mit exklusiven Rabatten</li>
          <li>Sponsoring durch die B.A.D. Agency mit Rabatten und weiterer Unterstützung</li>
          <li>Ausrüstung zum Leihen, um einen ersten Eindruck zu gewinnen</li>
          <li>Beratung beim Kauf und Tuning von Ausrüstung</li>
          <li>Organisation von Events, Fahrgemeinschaften, etc.</li>
        </ul>
      </BaseParagraph>
      <BaseParagraph class="mt-8">
        Folgendes solltest du mitbringen:
        <ul class="mt-4">
          <li>Discord oder WhatsApp für einfache Kommunikation</li>
          <li>Account im Airsoft-Verzeichnis</li>
          <li>Teamgeist</li>
          <li>Motivation</li>
          <li>... und vor allem Interesse am Airsoft-Sport!</li>
        </ul>
      </BaseParagraph>

      <h2 class="text-h3 mt-14 pt-md-4">
        Nach meinem Beitritt?
      </h2>

      <BaseParagraph class="mt-6 mt-md-8">
        Nach deinem Beitritt zum Verein erhältst du von deinem Spartenleiter einen Patch und einen Satz Teambinden, in
        drei Farben.
        Zuzügliche Patches und Teambinden kannst du käuflich von deinem Spartenleiter erwerben.
        <br>
        Außerdem erhältst du Zugriff auf die „Waffenkammer“ bzw. Leihausrüstung des Vereins, falls du noch keine eigene
        Ausstattung besitzt.
      </BaseParagraph>
    </BaseContainer>

    <BaseSectionTitle class="mt-14">
      Unsere Partner
    </BaseSectionTitle>
    <div>
      <PartnerLogos
        :show-only="['airsoft']"
        class="mt-14 mb-14"
      />
    </div>

    <BaseSectionTitle class="mt-14">
      Galerie
    </BaseSectionTitle>
    <div>
      <ImageSlider :images="sliderImages" />
    </div>
  </div>
</template>

<script>
import BaseBranchHeader from '@/components/base/BaseBranchHeader';
import leaders from '@/constants/branchLeaders';
import links from '@/constants/links';
import PartnerLogos from '@/components/partners/PartnerLogos';
import ImageSlider from '@/components/ImageSlider/ImageSlider';

export default {
  name: 'Airsoft',
  metaInfo: {
    title: 'Alles im Rudel e.V. | Airsoft',
  },
  components: {
    ImageSlider,
    PartnerLogos,
    BaseBranchHeader
  },
  data() {
    return {
      leader: leaders.NICK_NICKELS,
      airsoftUrl: links.AIRSOFT_VERZEICHNIS,
      sliderImages: [
        '/assets/branches/airsoft/slider/airsoft-1.jpg',
        '/assets/branches/airsoft/slider/airsoft-2.jpg',
        '/assets/branches/airsoft/slider/airsoft-3.jpg',
        '/assets/branches/airsoft/slider/airsoft-4.jpg',
        '/assets/branches/airsoft/slider/airsoft-5.jpg',
        '/assets/branches/airsoft/slider/airsoft-6.jpg',
        '/assets/branches/airsoft/slider/airsoft-7.jpg',
      ]
    };
  }
};
</script>

<style lang="scss">
.branch-airsoft {
  .branch-leader-container {
    max-width: 70vw;
    margin: 0 auto;
  }
}
</style>