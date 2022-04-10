<template>
  <v-card
    flat
    class="d-flex align-center"
  >
    <v-checkbox
      v-model="checked"
      class="mt-0"
      dense
      hide-details
    />
    <v-card-text class="pt-1 pb-0">
      <slot />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'OverviewCheckbox',
  props: {
    value: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
};
</script>