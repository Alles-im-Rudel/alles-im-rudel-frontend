<template>
  <div>{{ form }}</div>
</template>
<script>

export default {
  props: {
    value: {
      type: Object,
      default: () => ({
        branches: []
      })
    },

  },
  data() {
    return {
      form: {}
    }
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.form = this.value;
      }
    }
  }
}
</script>