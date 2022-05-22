<template>
  <v-snackbar
    v-model="snackbar"
    :multi-line="true"
    :right="true"
    timeout="-1"
    class="px-sm-3 py-sm-3"
  >
    Wir verwenden Cookies.

    <template v-slot:action="{ attrs }">
      <v-btn
        icon
        color="white"
        v-bind="attrs"
        class="mr-2"
        @click="hideSnackbar"
      >
        <v-icon>fa-times</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbar: localStorage.getItem('cookies') !== 'true'
    };
  },
  methods: {
    hideSnackbar() {
      this.snackbar = false;
      localStorage.setItem('cookies', 'true');
    }
  }
};
</script>
