<template>
  <div v-if="!isLoadingBranches">
    <branch-card
      v-for="branch in branches"
      :key="branch.id"
      :validation-errors="errors"
      :branch="branch"
      :selected="selected.includes(branch.id)"
      @select="select(branch.id)"
      @unselect="unselect(branch.id)"
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
import ValidationErrors from '@/mixins/ValidationErrors';
import BranchCard from '@/components/branch/BranchSelect/parts/BranchCard';
import {mapActions, mapGetters} from 'vuex';

export default {
  components: {
    BranchCard
  },
  mixins: [ValidationErrors],
  props: {
    value: {
      type: Array,
      default: () => []
    },
    validationErrors: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      errors: {},
      selected: this.value
    };
  },
  computed: {
    ...mapGetters('branch', ['branches', 'isLoadingBranches']),
  },
  watch: {
    validationErrors: {
      handler() {
        this.errors = this.validationErrors;
      },
      deep: true
    },
    selected: {
      deep: true,
      handler() {
        this.$emit('input', this.selected);
      }
    },
    value: {
      deep: true,
      handler() {
        this.selected = this.value;
      }
    }
  },
  created() {
    this.getBranches();
  },
  methods: {
    ...mapActions('branch', ['getBranches']),
    select(branchId) {
      this.selected.push(branchId);
    },
    unselect(branchId) {
      this.selected = this.selected.filter(id => id !== branchId);
    }
  }
};
</script>