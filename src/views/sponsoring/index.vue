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
            10% Rabatt auf alle Reparaturen und Dienstleistungen
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
                    branch="Airsoft"
                  />
                </div>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            lalelu
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
                <h2>Bad Agency</h2>
                <SponsoringAvailableLabel
                  :available="hasAirsoft"
                  branch="Airsoft"
                />
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            lalelu
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </BaseContainer>
  </div>
</template>

<script>
import SponsoringAvailableLabel from '@/views/sponsoring/parts/SponsoringAvailableLabel';
import {mapGetters} from 'vuex';

export default {
  components: {SponsoringAvailableLabel},
  computed: {
    ...mapGetters('auth', ['user']),
    hasAirsoft() {
      return false;
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
