<template>
  <v-snackbar :value="isVisible" :color="color" @input="close">
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn
          icon
          @click="close"
          v-bind="attrs"
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
      resolve: null,
      isVisible: false,
      message: null,
      color: 'primary',
      position: 'bottom'
    };
  },
  methods: {
    open(message, color = 'primary', position = 'bottom') {
      this.isVisible = true;
      this.message = message;
      this.color = color;
      this.position = position;
      return new Promise(resolve => {
        this.resolve = resolve;
      });
    },
    close() {
      this.resolve(true);
      this.isVisible = false;
    }
  }
};
</script>
