<template>
  <v-dialog v-model="showDialog" max-width="500">
    <template v-slot:activator="{ on: dialog }">
      <v-btn
          color="darkGrey"
          text
          dark
          v-on="{ ...dialog }"
      >
        <v-icon left>fa-plus</v-icon>
        Kommentar
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        Kommentar erstellen
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>

export default {

  data() {
    return {
      showDialog: false
    };
  },

  computed: {},
  methods: {}
};
</script>