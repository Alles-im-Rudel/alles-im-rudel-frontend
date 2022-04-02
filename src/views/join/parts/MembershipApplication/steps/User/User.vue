<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="email"
          required
          label="Email"
          :prepend-inner-icon="checkEmailIcon"
          :error="hasErrors('email')"
          :error-messages="getErrors('email')"
        />
      </v-col>
    </v-row>
    <user-password-form
      v-model="form"
      :validation-errors="errors"
      :has-padding="false"
    />
  </div>
</template>
<script>
import ValidationErrors from '@/mixins/ValidationErros';
import UserPasswordForm from '@/components/users/UserPasswordForm';

export default {
  components: {
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
      form: {},
      errors: {},
      isLoading: false,
      email: '',
      isLoadingEmail: false,
      isEmailFree: false,
    };
  },
  computed: {
    checkEmailIcon() {
      if (this.isLoadingEmail) {
        return 'fa-loader';
      }
      return this.email && this.isEmailFree ? 'fa-check' : 'fa-times';
    }
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.form = this.value;
      }
    },
    email: {
      handler() {
        setTimeout(() => {
          if (this.email) {
            this.checkEmail();
          } else {
            this.form.email = null;
          }
        }, 1000);
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
  methods: {
    async checkEmail() {
      this.isLoadingEmail = true;
      try {
        let {data} = await window.axios.get(`/profile/check-email/${this.email}`);
        this.isEmailFree = data[0];
        if (this.isEmailFree && this.email) {
          this.form.email = this.email;
        } else {
          this.form.email = null;
        }
      } catch (error) {
        this.errors = error;
        this.form.email = null;
      } finally {
        this.isLoadingEmail = false;
      }
    }
  }
};
</script>