<template>
  <div>
    <branch
      v-for="branchUserMemberShip in sepaChange.user.branchUserMemberShips"
      :key="branchUserMemberShip.id"
      :branch-user-member-ship="branchUserMemberShip"
      @reload="reload"
    />
  </div>
</template>

<script>
import Branch from '@/views/management/members/SEPA/parts/BranchUserMemberShip';

export default {
  components: {
    Branch
  },
  props: {
    sepaChange: {
      type: Object,
      required: true,
      default: () => {
      },
    },
  },
  data() {
    return {
      show: false
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  methods: {
    reload() {
      this.$emit('reload');
    },
  }
};
</script>