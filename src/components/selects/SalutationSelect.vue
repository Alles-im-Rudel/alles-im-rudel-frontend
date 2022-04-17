<template>
  <v-combobox
    v-model="selectedSalutation"
    :label="label"
    :items="salutations"
    item-text="displayName"
    :error="hasErrors('salutation')"
    :error-messages="getErrors('salutation')"
    :hide-details="hideDetails"
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
      default: 'Anrede'
    },
    validationErrors: {
      type: Object,
      default: () => ({}),
      required: false
    },
    hideDetails: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedSalutation: this.value,
      errors: this.validationErrors,
      salutations: ['Herr', 'Frau', 'Divers']
    };
  },
  watch: {
    value(value) {
      this.selectedSalutation = value;
    },
    validationErrors: {
      deep: true,
      handler(value) {
        this.errors = value;
      }
    },
    selectedSalutation(value) {
      this.$emit('input', value);
    }
  }
};
</script>
