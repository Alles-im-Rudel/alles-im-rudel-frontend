<template>
  <div class="profile-branches">
    <BranchSelect
      v-model="selectedBranchIds"
    />
    <v-row
      class="mt-4"
      dense
    >
      <v-col
        cols="6"
        md="3"
      >
        Aktuelle Kosten:
      </v-col>
      <v-col
        cols="6"
        md="3"
      >
        {{ currentCost }} €
      </v-col>
    </v-row>
    <v-row
      v-if="hasChanges"
      class="pt-0"
      dense
    >
      <v-col
        cols="6"
        md="3"
      >
        Neue Kosten:
      </v-col>
      <v-col
        cols="6"
        md="3"
      >
        {{ newCost }} €
      </v-col>
    </v-row>
    <div class="d-flex justify-end mt-6">
      <v-btn
        color="greyBlue"
        :disabled="!hasChanges"
        :loading="isLoading"
        :dark="isLoading"
        @click="submit"
      >
        <span :class="!hasChanges ? 'grey--text' : 'white--text'">
          Speichern
        </span>
      </v-btn>
    </div>
  </div>
</template>

<script>
import BranchSelect from '@/components/branch/BranchSelect/BranchSelect';
import {mapActions, mapGetters} from 'vuex';

export default {
  components: {BranchSelect},
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.value,
      selectedBranchIds: [],
      userBranchIds: [],
      isLoading: false
    };
  },
  computed: {
    ...mapGetters('branch', ['branches', 'isLoadingBranches']),
    currentCost() {
      if (!this.branches.length) {
        return 0;
      }

      return this.userBranchIds.reduce((acc, branchId) => {
        let branch = this.branches.find(branch => branch.id === branchId);
        return acc + branch.price;
      }, 0);
    },
    newCost() {
      if (!this.branches.length) {
        return 0;
      }

      return this.selectedBranchIds.reduce((acc, branchId) => {
        let branch = this.branches.find(branch => branch.id === branchId);
        return acc + branch.price;
      }, 0);
    },
    hasChanges() {
      return JSON.stringify(this.selectedBranchIds) !== JSON.stringify(this.userBranchIds);
    },
  },
  watch: {
    user: {
      handler(value) {
        this.user = value;
        this.setSelectedBranches();
        this.setUserBranches();
      },
      deep: true,
    },
  },
  created() {
    this.getBranches();
    this.setSelectedBranches();
    this.setUserBranches();
  },
  methods: {
    ...mapActions('branch', ['getBranches']),
    setSelectedBranches() {
      this.selectedBranchIds = this.getUserBranchIds();
    },
    setUserBranches() {
      this.userBranchIds = this.getUserBranchIds();
    },
    getUserBranchIds() {
      return this.user.branchUserMemberShips.map(branchUserMemberShip => branchUserMemberShip.branch.id);
    },
    submit() {
      this.isLoading = true;
      const params = {
        branchIds: this.selectedBranchIds
      };
      
      window.axios
        .put('profile/branches', params)
        .then((response) => {
          this.userBranchIds = [...this.selectedBranchIds];
          this.$root.$snackbar.open(response.data.message);
        })
        .finally(() => this.isLoading = false);
    },
  },
};
</script>