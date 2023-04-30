<template>
  <v-btn
    class="mx-1"
    text
    dark
    @click="onClick"
  >
    {{ item.name }}
  </v-btn>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClick() {
      if (this.item.href) {
        window.location.href = this.item.href;
        return;
      }

      this.pushRouteTo(this.item.route);
    }
  }
};
</script>
