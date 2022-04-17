<template>
  <div
    class="base-container"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseContainer',
};
</script>

<style scoped>
.base-container {
  max-width: 1150px;
  width: 90%;
  margin: 0 auto;
}
</style>
