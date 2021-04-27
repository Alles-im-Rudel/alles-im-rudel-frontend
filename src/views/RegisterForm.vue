<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <base-card>
          <v-card-title>Mitglied werden</v-card-title>
          <form @submit.prevent="submit">
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                      v-model="form.username"
                      label="Benutzername"
                      :error="hasErrors('username')"
                      :error-messages="getErrors('username')"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      v-model="form.email"
                      label="Email"
                      :error="hasErrors('email')"
                      :error-messages="getErrors('email')"
                  />
                </v-col>
                <v-col cols="12" md="2">
                  <date-picker v-model="form.birthday" label="Geburstag" />
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                      v-model="form.firstName"
                      label="Vorname"
                      :error="hasErrors('firstName')"
                      :error-messages="getErrors('firstName')"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      v-model="form.lastName"
                      label="Nachname"
                      :error="hasErrors('lastName')"
                      :error-messages="getErrors('lastName')"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      v-model="form.password"
                      :append-icon="showPassword ? 'fa-eye' : 'fa-eye-slash'"
                      :type="showPassword ? 'text' : 'password'"
                      label="Passwort"
                      counter
                      :error="hasErrors('password')"
                      :error-messages="getErrors('password')"
                      @click:append="showPassword = !showPassword"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      v-model="form.passwordRepeat"
                      :append-icon="showPasswordRepeat ? 'fa-eye' : 'fa-eye-slash'"
                      :type="showPasswordRepeat ? 'text' : 'password'"
                      label="Passwort wiederholen"
                      counter
                      :error="hasErrors('passwordRepeat')"
                      :error-messages="getErrors('passwordRepeat')"
                      @click:append="showPasswordRepeat = !showPasswordRepeat"
                  />
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn type="submit" :loading="isLoadingAuth" :disabled="!canSubmit">Register</v-btn>
            </v-card-actions>
          </form>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import ValidationErrors from "@/mixins/ValidationErros";
import DatePicker from '@/components/picker/DatePicker';
import router from "@/router";

export default {
  mixins: [ValidationErrors],
  components: {
    DatePicker
  },
  data() {
    return {
      form: {
        username: null,
        email: null,
        birthday: null,
        firstName: null,
        lastName: null,
        password: null,
        passwordRepeat: null
      },
      isLoading: false,
      errorMessage: null,
      errors: {},
      showPasswordRepeat: false,
      showPassword: false
    }
  },
  computed: {
    ...mapGetters('auth', ['isLoadingAuth']),
    canSubmit() {
      return !!this.form.username &&
          !!this.form.email &&
          !!this.form.password &&
          !!this.form.passwordRepeat &&
          !!this.form.birthday &&
          !!this.form.firstName &&
          !!this.form.lastName &&
          (this.form.password === this.form.passwordRepeat)
    }
  },
  methods: {
    ...mapActions('auth', ['register']),
    submit() {
      this.clearErrors();
      this.register(this.form)
          .then(() => {
            this.$root.$snackbar.open('Dein Antrag ist eingegangen und wird bei Gelegenehit überprüft!');
            router.push({name: 'home'});
          })
          .catch(this.syncErrors);
    }
  }
}
</script>