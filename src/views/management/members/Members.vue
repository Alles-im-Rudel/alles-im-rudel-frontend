<template>
  <v-container>
    <v-tabs
      v-model="activeTab"
      centered
    >
      <v-tab href="#new-members">
        Neue Anmeldungen
      </v-tab>
      <v-tab href="#new-branch-members">
        Neue Sparten Anmeldungen
      </v-tab>
      <v-tab href="#sepa-members">
        SEPA-Daten
      </v-tab>
    </v-tabs>
    <v-divider />
    <v-tabs-items
      v-model="activeTab"
      style="background-color:rgba(255, 255, 255, 0)"
    >
      <v-tab-item value="new-members">
        <NewMembers />
      </v-tab-item>
      <v-tab-item value="new-branch-members">
        <NewBranchMembers />
      </v-tab-item>
      <v-tab-item value="sepa-members">
        <s-e-p-a />
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import NewMembers from '@/views/management/members/NewMembers/NewMembers';
import NewBranchMembers from '@/views/management/members/NewBranchMembers/NewBranchMembers';
import SEPA from '@/views/management/members/SEPA/SEPA';

export default {
  name: 'Members',
  components: {
    SEPA,
    NewMembers,
    NewBranchMembers
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
          name: 'management-members',
          query: {activeTab}
        });
      }
    }
  },
  methods: {}
};
</script>