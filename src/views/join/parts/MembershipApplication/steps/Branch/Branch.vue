<template>
  <v-stepper-content
    step="3"
  >
    <BranchSelect
      v-model="form.branches"
      :validation-errors="validationErrors"
    />
    <StepControls
      class="mt-3"
      :is-valid="isValid"
      @step-continue="$emit('step-continue')"
      @step-back="$emit('step-back')"
    />
  </v-stepper-content>
</template>

<script>
import ValidationErrors from '@/mixins/ValidationErrors';
import BranchSelect from '@/components/branch/BranchSelect/BranchSelect';
import StepControls from '@/views/join/parts/MembershipApplication/parts/StepControls';

export default {
  components: {
    StepControls,
    BranchSelect
  },
  mixins: [ValidationErrors],
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
      form: this.value,
      errors: {},
    };
  },
  computed: {
    isValid() {
      return !!this.form.branches;
    },
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
};
</script>