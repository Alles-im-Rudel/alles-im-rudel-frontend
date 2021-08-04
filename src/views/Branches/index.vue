<template>
  <v-card tile>
    <logo-parallax :active-tab="activeTab" />
    <v-tabs
      v-model="activeTab"
      active-class="secondary"
      fixed-tabs
      show-arrows
    >
      <v-tab href="#airsoft">Airsoft</v-tab>
      <v-tab href="#esports">E-Sports</v-tab>
    </v-tabs>
    <v-divider/>
    <v-card-text class="mx-auto" style="max-width: 1300px">
      <v-tabs-items v-model="activeTab">
        <v-tab-item value="airsoft">
          <Airsoft/>
        </v-tab-item>
        <v-tab-item value="esports">
          <Gaming/>
        </v-tab-item>
      </v-tabs-items>
    </v-card-text>
  </v-card>
</template>
<script>
import Gaming from "@/views/Branches/parts/Gaming";
import Airsoft from "@/views/Branches/parts/Airsoft";
import LogoParallax from "./parts/LogoParallax";

export default {
  name: 'Branches',
  components: {
    LogoParallax,
    Airsoft,
    Gaming
  },
  data() {
    return {
      activeTab: this.$route.query.activeTab || null
    }
  },
  watch: {
    activeTab(activeTab) {
      if (activeTab) {
        this.$router.replace({
          name: 'branches',
          query: {activeTab}
        });
      }
    }
  }
};
</script>