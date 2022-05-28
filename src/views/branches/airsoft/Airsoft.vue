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
            Wir sind ein stetig wachsendes Airsoft-Team, das sich aus Mitgliedern aus dem Raum Schleswig-Holstein und
            Mecklenburg-Vorpommern zusammensetzt, und jeweils einen Sitz in Elmshorn (SH) und in Leizen (MV) hat. Es ist
            unser vorrangiges Ziel, den Airsoft-Sport für neue Spieler zugänglicher zu machen, und bereits aktiven
            Spielern schnell und unkompliziert ein erfahrenes Team anzubieten. Mit dem Fokus auf Teamplay, Fairness und
            vor allem Spaß an dem Airsoft-Sport begrüßen wir auf herzliche Weise neue Spieler bei uns im Team.
            <br><br>
            Du findest uns übrigens auch im <a
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
          <li>Sponsorings mit exklusiven Rabatten</li>
          <li>Ausrüstung zum Leihen, um einen ersten Eindruck zu gewinnen</li>
          <li>Beratung beim Kauf und Tuning von Ausrüstung</li>
          <li>Organisation von Events, Fahrgemeinschaften, etc.</li>
        </ul>
      </BaseParagraph>
      <BaseParagraph class="mt-8">
        Folgendes solltet ihr mitbringen:
        <ul class="mt-4">
          <li>Teamgeist</li>
          <li>... und vor allem Interesse an dem Airsoft-Sport!</li>
        </ul>
      </BaseParagraph>

      {{ /* todo: join branch button */ }}
    </BaseContainer>

    <BaseSectionTitle class="mt-12">
      Bilder
    </BaseSectionTitle>
    <div>
      <ImageSlider :images="sliderImages" />
    </div>

    <BaseSectionTitle>
      Unsere Partner
    </BaseSectionTitle>
    <div>
      <PartnerLogos
        :show-only="['airsoft']"
        class="mt-14 mb-14"
      />
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
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpaperheart.com%2Fwp-content%2Fuploads%2F2018%2F04%2FHD-Wallpaper-Pictures-hd-walpaper.jpg&f=1&nofb=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-JTVZ2ajkvrU%2FUiIb8LLrIII%2FAAAAAAAAGb4%2FioF8FtLFzR0%2Fs1600%2F1307306470-nature_wallpaper_hd_hd_nature_3.jpg&f=1&nofb=1',
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F3%2Fd%2F3%2F1193570-vivid-wallpaper-1920x1080-for-phone.jpg&f=1&nofb=1',
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-fpEFUD90X9o%2FTwg7Tt2NZSI%2FAAAAAAAAA2s%2FU74mr-bYVMA%2Fs1600%2Fhd%2Bwallpapers%2B%2525287%252529.jpg&f=1&nofb=1'
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