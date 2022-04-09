<template>
  <div>
    <branch-card
      v-for="branch in branches"
      :key="branch.id"
      :validation-errors="errors"
      :branch="branch"
      :selected="selectedIds"
      @branch-changed="changeBranches"
    />
  </div>
</template>
<script>
import ValidationErrors from '@/mixins/ValidationErros';
import BranchCard from '@/views/join/parts/MembershipApplication/steps/Branch/BranchCard';

export default {
  components: {
    BranchCard
  },
  mixins: [ValidationErrors],
  props: {
    value: {
      type: Object,
      default: () => ({
        branches: [
          {
            id: 1
          }
        ]
      })
    },
    validationErrors: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      date: null,
      form: {
        branches: [
          {
            id: 1
          }
        ]
      },
      errors: {},
      isLoading: false,
      branches: [],
    };
  },
  computed: {
    selectedIds() {
      return this.form.branches.map(item=>item.id);
    }
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.form = this.value;
      }
    },
    validationErrors: {
      handler() {
        this.errors = this.validationErrors;
      },
      deep: true
    },
    form: {
      deep: true,
      handler() {
        this.$emit('input', this.form);
      }
    }
  },
  created() {
    this.getBranches();
  },
  methods: {
    async getBranches() {
      this.isLoading = true;
      try {
        let {data} = await window.axios.get('/branches');
        this.branches = data.data;
      } catch (error) {
        this.errors = error;
      } finally {
        this.isLoading = false;
      }
    },
    changeBranches(branch) {
      if (this.form.branches && this.form.branches.length > 0) {
        const index = this.form.branches.findIndex((item) => item.id === branch.id);
        if (index >= 0) {
          this.form.branches.splice(index, 1);
        } else {
          this.form.branches.push(branch);
        }
      } else {
        this.form.branches = [];
        this.form.branches.push(branch);
      }
    }
  }
};
</script>