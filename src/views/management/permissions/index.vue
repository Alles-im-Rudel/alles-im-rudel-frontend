<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <base-card>
          <v-card-title>Berechtigungsverwaltung</v-card-title>

        </base-card>
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