<template>
  <v-combobox
      v-model="selectedSalutation"
      :label="label"
      :items="salutations"
      item-text="displayName"
      :error="hasErrors('salutation')"
      :error-messages="getErrors('salutation')"
  />
</template>
<script>
import ValidationErrors from '@/mixins/ValidationErros';

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
        return 'Anrede auswählen';
      }
    },
    validationErrors: {
      type: Object,
      default: () => {}
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
