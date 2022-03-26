<template>
  <div>
    <v-chip
      v-for="tag in tags"
      :key="tag.id"
      class="mx-1"
      :color="tag.color"
      dark
    >
      {{ tag.name }}
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      required: true,
      type: Array
    }
  }
};
</script>