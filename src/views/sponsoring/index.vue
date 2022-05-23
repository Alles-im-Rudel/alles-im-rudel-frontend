<template>
  <div class="white">
    <BaseSectionTitle>
      Sponsoring
    </BaseSectionTitle>

    <BaseContainer class="mt-14 mb-14">
      <BaseParagraph class="mb-12">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
        sanctus est Lorem ipsum dolor sit amet.
      </BaseParagraph>

      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-row class="expansion-panel-logo-container">
              <v-col
                cols="9"
                sm="3"
                lg="2"
              >
                <img
                  src="/assets/sponsors/henry-krohn/henry-krohn-quadratic.jpg"
                  alt="Henry Krohn Logo"
                >
              </v-col>
              <v-col
                cols="12"
                sm="9"
                lg="10"
                class="d-flex align-center"
              >
                <div>
                  <h2>Autoreparatur Henry Krohn</h2>
                  <SponsoringAvailableLabel />
                </div>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row class="pb-1">
              <v-col cols="12">
                <p>
                  <b>Welche Vorteile hab ich?</b>
                </p>
                <ul>
                  <li>
                    10% Rabatt auf alle Reparaturen und Dienstleistungen
                  </li>
                </ul>
              </v-col>
              <v-col
                cols="12"
                class="mt-1"
              >
                <p>
                  <b>Wie komme ich an die Vorteile?</b>
                </p>

                <p>
                  Gib einfach beim Bezahlen oder bei Kontoerstellung an, dass du Vereinsmitglied bist!
                </p>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-expansion-panels class="mt-6">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-row class="expansion-panel-logo-container">
              <v-col
                cols="9"
                sm="3"
                lg="2"
              >
                <img
                  src="/assets/sponsors/begadi/begadi.png"
                  alt="Begadi"
                >
              </v-col>
              <v-col
                cols="12"
                sm="9"
                lg="10"
                class="d-flex align-center"
              >
                <div>
                  <h2>Begadi</h2>
                  <SponsoringAvailableLabel
                    :available="hasAirsoft"
                    :loading="isLoading"
                    branch="Airsoft"
                  />
                </div>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row class="pt-3 pb-2">
              <v-col cols="12">
                <p>
                  <b>Welche Vorteile hab ich?</b>
                </p>

                <ul>
                  <li>
                    15% Rabatt auf das gesamte Sortiment
                  </li>
                  <li>
                    Support Patches
                  </li>
                  <li>
                    Teamarmbänder
                  </li>
                </ul>
              </v-col>

              <v-col
                v-if="hasAirsoft"
                cols="12"
                class="mt-1 pb-6"
              >
                <p>
                  <b>Wie komme ich an die Vorteile?</b>
                </p>

                <p>
                  Über den Link <a href="https://www.begadi.com/teamsponsoring/front/teamsponsoring">https://www.begadi.com/teamsponsoring/front/teamsponsoring</a> könnt ihr euer Begadi-Konto zum Sponsoring freischalten.<br>
                  Ihr müsst euch nur vorher einloggen.
                </p>

                <p>
                  Danach tragt ihr folgende Daten unter „Mein Konto“ im Reiter „Teamsponsoring“ ein:
                </p>

                <ul>
                  <li>Name des Teams: Alles im Rudel</li>
                  <li>Website des Teams: https://www.facebook.com/allesimrudel</li>
                  <li>Verantwortliche Person: Philipp Gottwald</li>
                  <li>Kontaktmöglichkeiten des Ansprechpartners: gottwald.philipp@gmx.de</li>
                </ul>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-expansion-panels class="mt-6">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-row class="expansion-panel-logo-container">
              <v-col
                cols="9"
                sm="3"
                lg="2"
              >
                <img
                  src="/assets/sponsors/bad-agency/bad-agency.png"
                  alt="Bad Agency"
                >
              </v-col>
              <v-col
                cols="12"
                sm="9"
                lg="10"
                class="d-flex align-center"
              >
                <div>
                  <h2>Bad Agency</h2>
                  <SponsoringAvailableLabel
                    :available="hasAirsoft"
                    :loading="isLoading"
                    branch="Airsoft"
                  />
                </div>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row class="pt-4 pb-2">
              <v-col cols="12">
                <p>
                  <b>Welche Vorteile hab ich?</b>
                </p>
                <ul>
                  <li>
                    5% bis 10% Rabatt beim Einkauf
                  </li>
                  <li>
                    Support Patches
                  </li>
                  <li>
                    Teamarmbänder
                  </li>
                  <li>
                    Supporter T-Shirts mit Klettflächen für Patches
                  </li>
                </ul>
              </v-col>
              <v-col
                v-if="hasAirsoft"
                cols="12"
                class="mt-1"
              >
                <p>
                  <b>Wie komme ich an die Vorteile?</b>
                </p>

                <p>
                  Bei der <a href="https://badagency.de">https://badagency.de</a> haben wir nun auch ein Sponsoring.<br>
                  Um eure Konto für den Rabatt freizuschalten, müsst ihr folgende Schritte berücksichtigen:
                </p>

                <ol>
                  <li>
                    ein Kundenkonto anlegen (falls noch nicht geschehen)
                  </li>
                  <li>
                    sich bei mir über www.badagency.de/teamanmeldung melden.
                  </li>
                </ol>

                <p class="mt-4">
                  Anschließend werden die Teamanmeldungen mit der Mitgliederliste abgeglichen und manuell freigeschaltet.
                </p>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </BaseContainer>
  </div>
</template>

<script>
import SponsoringAvailableLabel from '@/views/sponsoring/parts/SponsoringAvailableLabel';

export default {
  components: {SponsoringAvailableLabel},
  data() {
    return {
      isLoading: false,
      user: null
    };
  },
  computed: {
    hasAirsoft() {
      if (!this.user) {
        return false;
      }

      return !!this.user.branchUserMemberShips.filter((item) => {
        return item.branch.name === 'Airsoft' && item.isActive === true;
      }).length;
    }
  },
  created() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      this.isLoading = true;
      window.axios
        .get('profile')
        .then((response) => {
          this.user = response.data.data;
        })
        .finally(() => (this.isLoading = false));
    }
  }
};
</script>

<style lang="scss">
.expansion-panel-logo-container {
  img {
    width: 100%;
  }
}
</style>
