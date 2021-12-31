<template>
  <div>
    <branch-card
        v-for="branch in branches"
        :key="branch.id"
        :validation-errors="errors"
        :branch="branch"
        @branch-changed="changeBranches"
    />
  </div>
</template>
<script>
import ValidationErrors from "@/mixins/ValidationErros";
import BranchCard from "@/views/joins/parts/MembershipApplication/steps/Branch/BranchCard";

export default {
  mixins: [ValidationErrors],
  components: {
    BranchCard
  },
  props: {
    value: {
      type: Object,
      default: () => ({
        branches: []
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
        branches: []
      },
      errors: {},
      isLoading: false,
      branches: [],
    }
  },
  created() {
    this.getBranches();
  },
  methods: {
    async getBranches() {
      this.isLoading = true;
      try {
        let {data} = await window.axios.get(`/branches`)
        this.branches = data.data;
      } catch (error) {
        this.errors = error;
      } finally {
        this.isLoading = false;
      }
    },
    changeBranches(branch) {
      const index = this.form.branches.findIndex((item) => item.id === branch.id);
      if (index) {
        this.form.branches.splice(index, 1);
      } else {
        this.form.branches.push(branch)
      }
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
  }
}
</script>