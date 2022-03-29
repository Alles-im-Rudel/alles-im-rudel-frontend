<template>
  <v-card tile>
    <v-tabs
      v-model="activeTab"
      active-class="secondary"
      fixed-tabs
      show-arrows
    >
      <v-tab href="#article-of-association">
        Vereinssatzung
      </v-tab>
      <v-tab href="#membership-application">
        Mitgliedsantrag
      </v-tab>
    </v-tabs>
    <v-divider />
    <v-card-text
      class="mx-auto"
      style="max-width: 1150px"
    >
      <v-tabs-items v-model="activeTab">
        <v-tab-item value="article-of-association">
          <ArticalOfAssociation />
        </v-tab-item>
        <v-tab-item value="membership-application">
          <MembershipApplication />
        </v-tab-item>
      </v-tabs-items>
    </v-card-text>
  </v-card>
</template>
<script>

import ArticalOfAssociation from "./parts/ArticalOfAssociation";
import MembershipApplication from "./parts/MembershipApplication/MembershipApplication";

export default {
  name: 'Join',
  components: {
    ArticalOfAssociation,
    MembershipApplication
  },
  data() {
    return {
      activeTab: this.$route.query.activeTab || null
    };
  },
  watch: {
    activeTab(activeTab) {
      if (activeTab) {
        this.$router.replace({
          name: 'join',
          query: {activeTab}
        });
      }
    }
  }
};
</script>