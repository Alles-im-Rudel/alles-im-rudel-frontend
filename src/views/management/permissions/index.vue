<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <base-card>
          <v-card-title>Berechtigungsverwaltung</v-card-title>
          <v-card-text class="pa-0 ma-0">
            <v-tabs
                v-model="activeTab"
                centered
            >
              <v-tab href="#user-groups">Benutzergruppen</v-tab>
            </v-tabs>
            <v-divider />
            <v-tabs-items style="background-color:rgba(255, 255, 255, 0)" v-model="activeTab">
              <v-tab-item value="user-groups">
                <user-groups />
              </v-tab-item>
            </v-tabs-items>
          </v-card-text>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserGroups from '@/views/management/permissions/parts/UserGroups'


export default {
  name: "PermissionManagement",
  components: {
    UserGroups
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
          name: 'management-permissions',
          query: {activeTab}
        });
      }
    }
  }
}
</script>