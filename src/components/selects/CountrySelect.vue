<template>
  <v-combobox
    v-model="selectedCountry"
    :label="label"
    :items="countries"
    item-text="name"
    :error="hasErrors('country')"
    :error-messages="getErrors('country')"
    :hide-details="!hasErrors('country')"
  />
</template>
<script>
import ValidationErrors from '@/mixins/ValidationErrors';

export default {
  mixins: [ValidationErrors],
  props: {
    value: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: function () {
        return 'Land auswählen';
      }
    },
    validationErrors: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      selectedCountry: this.value,
      errors: this.validationErrors,
      countries: ['Deutschland']
    };
  },
  watch: {
    value(value) {
      this.selectedCountry = value;
    },
    validationErrors: {
      deep: true,
      handler(value) {
        this.errors = value;
      }
    },
    selectedCountry(value) {
      this.$emit('input', value);
    }
  }
};
</script>
