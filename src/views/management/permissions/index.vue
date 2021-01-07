<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-card color="rgb(255, 255, 255, 0.9)">
          <v-card-title>Berechtigungsverwaltung</v-card-title>

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
        username: null,
        email: null,
        password: null,
        passwordRepeat: null
      },
      isLoading: false,
      errorMessage: null,
      errors: {},
    }
  },
  computed: {},
  methods: {}
}
</script>