<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <v-tabs
            v-model="activeTab"
            centered
        >
          <v-tab href="#user">Benutzer</v-tab>
          <v-tab href="#summoner">Summoner</v-tab>
        </v-tabs>
        <v-divider />
        <v-tabs-items style="background-color:rgba(255, 255, 255, 0)" v-model="activeTab">
          <v-tab-item value="user">
            <user-profile />
          </v-tab-item>
          <v-tab-item value="summoner">
            <base-card>
              <v-card-text>
                undso weiter
              </v-card-text>
            </base-card>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserProfile from "@/views/profile/parts/UserProfile";
import BaseCard from "@/components/base/BaseCard";

export default {
  name: "Profile",
  components: {
    BaseCard,
    UserProfile
  },
  data() {
    return {
      activeTab: this.$route.query.activeTab || null
    }
  },
  computed: {},
  methods: {},
  watch: {
    activeTab(activeTab) {
      if (activeTab) {
        this.$router.replace({
          name: 'profile',
          query: {activeTab}
        });
      }
    }
  }
}
</script>