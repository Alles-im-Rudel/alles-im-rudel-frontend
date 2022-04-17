<template>
  <div class="articles-of-association-list-item">
    <div class="label">
      ({{ label }})
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
      default: null
    }
  }
};
</script>

<style lang="scss">
.articles-of-association-list-item {
  display: flex;

  .label {
    min-width: 40px;
  }

  .content {
    width: 100%;
  }
}
</style>