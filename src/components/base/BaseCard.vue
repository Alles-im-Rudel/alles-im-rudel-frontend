<template>
  <v-card
    color="rgba(255, 255, 255, 0.6)"
    v-bind="$attrs"
    tile
    v-on="$listeners"
  >
    <slot />
  </v-card>
</template>

<script>
export default {
  name: 'BaseCard',
};
</script>
