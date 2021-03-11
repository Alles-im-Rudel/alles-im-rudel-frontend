<template>
  <v-container>
    <v-tabs
        v-model="activeTab"
        centered
    >
      <v-tab href="#user">Benutzer</v-tab>
      <v-tab href="#image">Profilbild</v-tab>
      <v-tab href="#summoner">Summoner</v-tab>
    </v-tabs>
    <v-divider />
    <v-tabs-items style="background-color:rgba(255, 255, 255, 0)" v-model="activeTab">
      <v-tab-item value="user">
        <user-profile :original-user="user" @updated="getUser" />
      </v-tab-item>
      <v-tab-item value="image">
        <user-image v-if="user.id" :original-user="user" @reload="getUser" />
      </v-tab-item>
      <v-tab-item value="summoner">
        <main-summoner :original-user="user" @updated="getUser" />
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import UserProfile from "@/views/profile/parts/UserProfile";
import MainSummoner from "@/views/profile/parts/MainSummoner";
import UserImage from "@/views/profile/parts/UserImage";

export default {
  name: "Profile",
  components: {
    UserProfile,
    MainSummoner,
    UserImage
  },
  data() {
    return {
      activeTab: this.$route.query.activeTab || null,
      user: {},
      isLoading: false
    }
  },
  watch: {
    activeTab(activeTab) {
      if (activeTab) {
        this.$router.replace({
          name: 'profile',
          query: {activeTab}
        });
      }
    }
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.isLoading = true;
      window.axios
          .get(`profile`)
          .then((response) => {
            this.user = response.data.data;
          })
          .finally(() => (this.isLoading = false));
    },
  }
}
</script>