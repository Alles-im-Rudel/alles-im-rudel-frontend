<template>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
            v-model="form.username"
            required
            label="Benutzername"
            :error="hasErrors('username')"
            :error-messages="getErrors('username')"
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
            v-model="form.email"
            required
            label="Email"
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
import ValidationErrors from "@/mixins/ValidationErros";
import UserPasswordForm from "@/components/users/UserPasswordForm";

export default {
  mixins: [ValidationErrors],
  components: {
    UserPasswordForm
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
      form: {},
      errors: {},
      isLoading: false,
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