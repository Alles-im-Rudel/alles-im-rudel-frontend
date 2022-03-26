<template>
  <p
    class="base-paragraph"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </p>
</template>

<script>
export default {
  name: 'BaseParagraph',
};
</script>

<style scoped>
.base-paragraph {
  font-size: 1.3rem !important;
  line-height: 1.5;
}
</style>
