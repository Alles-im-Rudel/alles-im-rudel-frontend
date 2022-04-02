<template>
  <v-chip
    v-if="tag"
    class="mx-1"
    :color="tag.color"
    dark
  >
    {{ tag.name }}
  </v-chip>
</template>

<script>
export default {
  props: {
    tag: {
      type: Object,
      required: false,
      default: null
    }
  }
};
</script>