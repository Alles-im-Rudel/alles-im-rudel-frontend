<template>
  <v-stepper-content step="5">
    <user-password-form
      v-model="form"
      :validation-errors="errors"
      :has-padding="false"
    />
    <StepControls
      :is-valid="isValid"
      @step-back="$emit('step-back')"
      @step-continue="$emit('step-continue')"
    />
  </v-stepper-content>
</template>

<script>
import ValidationErrors from '@/mixins/ValidationErrors';
import UserPasswordForm from '@/components/users/UserPasswordForm';
import StepControls from '@/views/join/parts/MembershipApplication/parts/StepControls';

export default {
  components: {
    StepControls,
    UserPasswordForm
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
      return !!this.form.email
        && !!this.form.password
        && (this.form.password === this.form.passwordRepeat);
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
  }
};
</script>