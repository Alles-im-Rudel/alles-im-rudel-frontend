<template>
  <div>
    <BaseBackground />
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <BaseCard>
            <v-card-title>Berechtigungsverwaltung</v-card-title>
            <v-card-text class="pa-0 ma-0">
              <v-tabs
                v-model="activeTab"
                centered
              >
                <v-tab href="#user-groups">
                  Benutzergruppen
                </v-tab>
              </v-tabs>
              <v-divider />
              <v-tabs-items
                v-model="activeTab"
                style="background-color:rgba(255, 255, 255, 0)"
              >
                <v-tab-item value="user-groups">
                  <user-groups />
                </v-tab-item>
              </v-tabs-items>
            </v-card-text>
          </BaseCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import UserGroups from '@/views/management/permissions/parts/UserGroups';


export default {
  name: 'PermissionManagement',
  components: {
    UserGroups
  },
  data() {
    return {
      activeTab: this.$route.query.activeTab || null
    };
  },
  computed: {},
  watch: {
    activeTab(activeTab) {
      if (activeTab) {
        this.$router.replace({
          name: 'management-permissions',
          query: {activeTab}
        });
      }
    }
  },
  methods: {}
};
</script>