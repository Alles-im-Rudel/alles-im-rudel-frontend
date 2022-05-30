<template>
  <v-combobox
    v-model="selectedCountry"
    :label="label"
    :items="countries"
    item-text="name"
    :error="hasErrors(isBankAccount ? 'bankAccountCountry' : 'country')"
    :error-messages="getErrors(isBankAccount ? 'bankAccountCountry' : 'country')"
    :hide-details="!hasErrors(isBankAccount ? 'bankAccountCountry' : 'country')"
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
      default: () => {
      }
    },
    isBankAccount: {
      type: Boolean,
      required: false,
      default: () => false
    },
  },
  data() {
    return {
      selectedCountry: this.value,
      errors: this.validationErrors,
      countries: [
        'Belgien',
        'Albanien',
        'Andorra',
        'Belarus',
        'Bosnien und Herzegowina',
        'Bulgarien',
        'Dänemark',
        'Deutschland',
        'Estland',
        'Finnland',
        'Frankreich',
        'Griechenland',
        'Irland',
        'Island',
        'Italien',
        'Kroatien',
        'Lettland',
        'Liechtenstein',
        'Litauen',
        'Luxemburg',
        'Malta',
        'Moldau',
        'Monaco',
        'Montenegro',
        'Niederlande',
        'Nordmazedonien',
        'Norwegen',
        'Österreich',
        'Polen',
        'Portugal',
        'Rumänien',
        'Russische Föderation',
        'San Marino',
        'Schweden',
        'Schweiz',
        'Serbien',
        'Slowakei',
        'Slowenien',
        'Spanien',
        'Tschechien',
        'Türkei',
        'Ukraine',
        'Ungarn',
        'Vatikanstadt',
        'Vereinigtes Königreich',
        'Zypern',
      ]
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
