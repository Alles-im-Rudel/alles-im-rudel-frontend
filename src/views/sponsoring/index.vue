<template>
  <div class="white">
    <BaseSectionTitle>
      Sponsoring
    </BaseSectionTitle>

    <BaseContainer class="mt-14 mb-14">
      <BaseParagraph class="mb-12">
        <strong>Hier siehst du alle Sponsoren unseres Vereins.</strong><br>
        Während auf manche Sponsorings alle Vereinsmitglieder Zugriff haben, gibt es auch Sponsorings auf die lediglich
        die Mitglieder bestimmter Sparten Zugriff haben. Um Zugriff auf diese zu erhalten, tritt einfach der
        entsprechenden Sparte bei!
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
                    10% Rabatt auf alle KFZ-Ersatzteile
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
                <ul>
                  <li>
                    Gib einfach beim Bezahlen an, dass du Vereinsmitglied bist.
                  </li>
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
                  Über das <a
                    href="https://www.begadi.com/teamsponsoring/invitation/index/code/gTzwAqBGMQ99zO255/"
                    target="_blank"
                  >Begadi Teamsponsoring</a> dein Begadi-Konto zum Sponsoring freischalten, wozu du dich jedoch vorher
                  einloggen musst.
                </p>
                <p>
                  Danach wirst du von deinem Teamleiter freigeschaltet!
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
                    5% bis 10% Rabatt auf ausgewählte Produkte
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
                  Um dein Konto für die Rabatte freizuschalten, musst du folgende Schritte berücksichtigen:
                </p>
                <ol>
                  <li>
                    Falls noch nicht geschehen, Kundenkonto anlegen
                  </li>
                  <li>
                    Über die <a
                      href="https://www.badagency.de/teamanmeldung"
                      target="_blank"
                    >
                      Bad Agency Teamanmeldung
                    </a> anmelden
                  </li>
                </ol>
                <p class="mt-4">
                  Anschließend wird deine Teamanmeldungen mit der Mitgliederliste abgeglichen und manuell
                  freigeschaltet.
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
                  src="/assets/sponsors/laserpatch/laserpatch.jpg"
                  alt="Laserpatch"
                >
              </v-col>
              <v-col
                cols="12"
                sm="9"
                lg="10"
                class="d-flex align-center"
              >
                <div>
                  <h2>Laserpatch</h2>
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
                    Mengenbestellungspreis für Einzelbestellungen möglich
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
                <ul>
                  <li>
                    Sende deine Bestellung an Illa Certkov, per WhatsApp unter
                    <a href="tel:+49 176 74723246">+49 176 74723246</a> oder per E-Mail an
                    <a href="mailto:laser@irpatch.com">laser@irpatch.com</a> und gib an, dass du zu Alles im Rudel
                    gehörst.
                  </li>
                </ul>
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