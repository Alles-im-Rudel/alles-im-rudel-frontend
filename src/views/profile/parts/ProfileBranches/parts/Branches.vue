<template>
  <div v-if="!isLoadingBranches">
    <branch
      v-for="branchUserMemberShip in branchUserMemberShips"
      :key="branchUserMemberShip.id"
      :branch-user-member-ship="branchUserMemberShip"
      :user="user"
      @reload="reload"
    />
    <new-branch
      v-for="branch in newBranchUserMemberShips"
      :key="branch.id"
      :branch="branch"
      :user="user"
      @reload="reload"
    />
  </div>
  <div
    v-else
    class="text-center py-6"
  >
    <v-progress-circular
      indeterminate
    />
  </div>
</template>

<script>
import Branch from '@/views/profile/parts/ProfileBranches/parts/Branch';
import {mapActions, mapGetters} from 'vuex';
import NewBranch from '@/views/profile/parts/ProfileBranches/parts/NewBranch';

export default {
  components: {
    NewBranch,
    Branch
  },
  props: {
    value: {
      type: Array,
      required: true,
      default: () => []
    },
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      branchUserMemberShips: this.value,
      newBranchUserMemberShips: []
    };
  },
  computed: {
    ...mapGetters('branch', ['branches', 'isLoadingBranches']),
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.branchUserMemberShips = this.value;
        this.setNewBranches();
      }
    },
    branches: {
      deep: true,
      handler() {
        this.setNewBranches();
      }
    }
  },
  created() {
    this.getBranches();
    this.setNewBranches();
  },
  methods: {
    ...mapActions('branch', ['getBranches']),
    setNewBranches() {
      this.newBranchUserMemberShips = this.branches.filter(branch => {
        return !this.branchUserMemberShips.some(branchUserMemberShip => {
          return branchUserMemberShip.branch.id === branch.id;
        });
      });
    },
    reload() {
      this.$emit('reload');
    }
  }
};
</script>