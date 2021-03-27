<template>
  <v-btn icon :color="color" @click="$emit('close')">
    <v-icon>fa-times</v-icon>
  </v-btn>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: () => 'darkGrey'
    }
  }
}
</script>
