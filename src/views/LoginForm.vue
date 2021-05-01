<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="5">
        <base-card>
          <v-card-title>Login</v-card-title>
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
                  required
                  type="password"
                  label="Passwort"
                  :error="hasErrors('password')"
                  :error-messages="getErrors('password')"
              />

            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn type="submit" :loading="isLoadingAuth">Login</v-btn>
            </v-card-actions>
          </form>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import ValidationErrors from '@/mixins/ValidationErros';

export default {
  mixins: [ValidationErrors],
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      isLoading: false,
      errorMessage: null,
      errors: {},
    }
  },
  computed: {
    ...mapGetters('auth', ['isLoadingAuth']),
  },
  methods: {
    ...mapActions('auth', ['login']),
    submit() {
      this.clearErrors();
      this.login(this.form)
          .then(() => {
            this.$router.push({name: 'home'});
          })
          .catch(error => {
            this.syncErrors(error);
          });
    }
  }
}
</script>