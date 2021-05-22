<template>
  <v-card tile>
    <v-card-text class="px-0 pt-0">
      <v-parallax :src="require('@/assets/background.png')">
        <v-tabs
            v-model="activeTab"
            active-class="secondary"
            fixed-tabs
            show-arrows
        >
          <v-tab href="#airsoft"> Airsoft</v-tab>
          <v-tab href="#gaming"> E-Sports</v-tab>
        </v-tabs>
      </v-parallax>
    </v-card-text>
    <v-divider />
    <v-card-text>
      <v-tabs-items v-model="activeTab">
        <v-tab-item value="airsoft">
          <Airsoft />
        </v-tab-item>
        <v-tab-item value="gaming">
          <Gaming />
        </v-tab-item>
      </v-tabs-items>
    </v-card-text>
  </v-card>
</template>
<script>
import Gaming from "@/views/Branches/parts/Gaming";
import Airsoft from "@/views/Branches/parts/Airsoft";

export default {
  name: 'Branches',
  components: {
    Airsoft,
    Gaming
  },
  data() {
    return {
      activeTab: this.$route.query.activeTab || null
    }
  },
  computed: {},
  created() {
  },
  methods: {},
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