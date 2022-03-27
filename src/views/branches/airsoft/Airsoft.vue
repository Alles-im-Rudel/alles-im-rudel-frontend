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
            unser vorrangiges Ziel, den Airsoft-Sport für neue Spieler zugänglicher zu machen, und bereits aktiven Spielern
            schnell und unkompliziert ein erfahrenes Team anzubieten. Mit dem Fokus auf Teamplay, Fairness und vor allem
            Spaß an dem Airsoft-Sport begrüßen wir auf herzliche Weise neue Spieler bei uns im Team.
            <br><br>
            Du findest uns übrigens auch im <a
              href="https://www.airsoft-verzeichnis.de/index.php?status=team&teamnummer=011712"
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
        Du hast Interesse? Das können wir bieten:
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
          <li>... & vor allem Interesse an dem Airsoft-Sport!</li>
        </ul>
      </BaseParagraph>

      {{ /* todo: join branch button */ }}
    </BaseContainer>

    <BaseSectionTitle class="mt-12">
      Partner
    </BaseSectionTitle>

    <div class="mt-14 mb-14">
      <div class="begadi-banner">
        <img
          src="/assets/sponsors/begadi/begadi_horizontal.jpg"
          alt="Begadi-Banner"
        >
      </div>
    </div>

    <BaseContainer />
  </div>
</template>

<script>
import BaseBranchHeader from '@/components/base/BaseBranchHeader';
import leaders from '@/constants/leaders';

export default {
  name: 'Airsoft',
  metaInfo: {
    title: 'Alles im Rudel | Airsoft',
  },
  components: {
    BaseBranchHeader
  },
  data() {
    return {
      leader: leaders.NICK_NICKELS
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

  .begadi-banner {
    margin: 0 auto;
    max-width: 650px;

    img {
      width: 100%;
    }
  }
}
</style>