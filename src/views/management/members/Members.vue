<template>
  <v-container>
    <v-tabs
      v-model="activeTab"
      centered
    >
      <v-tab
        v-if="canSeeNewMembers"
        href="#new-members"
      >
        Neue Anmeldungen
      </v-tab>
      <v-tab
        v-if="canSeeNewBranch"
        href="#new-branch-members"
      >
        Neue Spartenanträge
      </v-tab>
      <v-tab
        v-if="canSeeSepa"
        href="#sepa-members"
      >
        SEPA-Daten
      </v-tab>
    </v-tabs>
    <v-divider />
    <v-tabs-items
      v-model="activeTab"
      style="background-color:rgba(255, 255, 255, 0)"
    >
      <v-tab-item
        v-if="canSeeNewMembers"
        value="new-members"
      >
        <NewMembers />
      </v-tab-item>
      <v-tab-item
        v-if="canSeeNewBranch"
        value="new-branch-members"
      >
        <NewBranchMembers />
      </v-tab-item>
      <v-tab-item
        v-if="canSeeSepa"
        value="sepa-members"
      >
        <s-e-p-a />
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import NewMembers from '@/views/management/members/NewMembers/NewMembers';
import NewBranchMembers from '@/views/management/members/NewBranchMembers/NewBranchMembers';
import SEPA from '@/views/management/members/SEPA/SEPA';
import Permissions from '@/mixins/Permissions';

export default {
  name: 'Members',
  components: {
    SEPA,
    NewMembers,
    NewBranchMembers
  },
  mixins: [Permissions],
  data() {
    return {
      activeTab: this.$route.query.activeTab || null
    };
  },
  computed: {
    canSeeNewMembers() {
      return this.can('members.manage.new');
    },
    canSeeNewBranch() {
      return this.can('members.manage.new_branch');
    },
    canSeeSepa() {
      return this.can('members.manage.sepa');
    }
  },
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