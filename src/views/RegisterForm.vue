<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="5">
        <v-card color="rgb(255, 255, 255, 0.9)">
          <v-card-title>Register</v-card-title>
          <form @submit.prevent="submit">
            Noch in arbeit
            <!--<v-card-text>
              <v-text-field
                  v-model="form.email"
                  required
                  label="Benutzername"

              />
              <v-text-field
                  v-model="form.password"
                  required
                  type="password"
                  label="Passwort"
              />

            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn type="submit" :loading="isLoadingAuth">Login</v-btn>
            </v-card-actions>-->
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

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
  methods: {
    submit: {}
  }
}
</script>