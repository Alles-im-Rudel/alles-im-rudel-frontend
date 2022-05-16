<template>
  <div class="login">
    <BaseBackground />
    <v-row justify="center">
      <v-col
        class="login-form mt-12"
        cols="12"
      >
        <BaseCard class="white">
          <v-card-title class="primary white--text">
            Login
          </v-card-title>
          <form @submit.prevent="submit">
            <v-card-text>
              <v-text-field
                v-model="form.email"
                required
                label="E-Mail"
                :error="hasErrors('email')"
                :error-messages="getErrors('email')"
              />
              <v-text-field
                v-model="form.password"
                class="mt-3"
                required
                type="password"
                label="Passwort"
                :error="hasErrors('password')"
                :error-messages="getErrors('password')"
              />
            </v-card-text>
            <v-card-text
              v-if="hasError && !hasBackendErrors"
              class="pt-0 error--text"
            >
              <v-icon class="error--text mr-1">
                fa-exclamation-circle
              </v-icon>
              Diese Kombination konnte nicht gefunden werden.
            </v-card-text>
            <v-card-actions class="pa-3">
              <v-spacer />
              <v-btn
                color="primary"
                type="submit"
                :loading="isLoadingAuth"
                class="px-6"
              >
                Login
              </v-btn>
            </v-card-actions>
          </form>
        </BaseCard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import ValidationErrors from '@/mixins/ValidationErrors';

export default {
  mixins: [ValidationErrors],
  metaInfo: {
    title: 'Alles im Rudel e.V. | Login'
  },
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      isLoading: false,
      hasError: false,
      errors: {},
    };
  },
  computed: {
    ...mapGetters('auth', ['isLoadingAuth']),
    hasBackendErrors() {
      return Object.keys(this.errors).length > 0;
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    submit() {
      this.isLoading = true;
      this.hasError = false;
      this.clearErrors();

      this.login(this.form)
        .then(() => {
          this.pushRouteTo('home');
        })
        .catch(error => {
          this.syncErrors(error);
          this.hasError = true;
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  position: relative;

  .login-form {
    max-width: 550px;
  }
}
</style>