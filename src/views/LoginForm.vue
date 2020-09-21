<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="5">
        <v-card color="rgb(255, 255, 255, 0.9)">
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <form>
              <v-text-field
                  v-model="form.email"
                  required
                  label="Benutzername"
                  :error="hasErrors('email')"
                  :error-messages="getErrors('email')"
              />
              <v-text-field
                  v-model="form.password"
                  required
                  type="password"
                  label="Passwort"
              />
            </form>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="submit" @keydown.enter.native="submit" :loading="isLoadingAuth">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
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
      this.login(this.form)
          .then(() => {
            this.$router.push({name: 'dashboard'});
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
            this.isLoading = false;
          });
    }
  }
}
</script>