<template>
  <v-row>
    <v-col
      v-if="withSalutation"
      cols="12"
      md="6"
      lg="1"
    >
      <SalutationSelect
        v-model="item.salutation"
        :validation-errors="errors"
        :hide-details="!hasErrors('salutation')"
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
      lg="2"
    >
      <v-text-field
        v-model="item.firstName"
        label="Vorname"
        :error="hasErrors(isBankAccount ? 'bankAccountFirstName' : 'firstName')"
        :error-messages="getErrors(isBankAccount ? 'bankAccountFirstName' : 'firstName')"
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
      lg="2"
    >
      <v-text-field
        v-model="item.lastName"
        label="Nachname"
        :error="hasErrors(isBankAccount ? 'bankAccountLastName' :'lastName')"
        :error-messages="getErrors(isBankAccount ? 'bankAccountLastName' :'lastName')"
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
      lg="2"
    >
      <v-text-field
        v-model="item.street"
        label="Straße"
        :error="hasErrors(isBankAccount ? 'bankAccountStreet' :'street')"
        :error-messages="getErrors(isBankAccount ? 'bankAccountStreet' :'street')"
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
      lg="1"
    >
      <v-text-field
        v-model="item.postcode"
        v-mask="'######'"
        label="PLZ"
        :error="hasErrors(isBankAccount ? 'bankAccountStreet' :'postcode')"
        :error-messages="getErrors(isBankAccount ? 'bankAccountStreet' :'postcode')"
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
      lg="2"
    >
      <v-text-field
        v-model="item.city"
        label="Stadt"
        :error="hasErrors(isBankAccount ? 'bankAccountCity' :'city')"
        :error-messages="getErrors(isBankAccount ? 'bankAccountCity' :'city')"
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
      lg="2"
    >
      <country-select
        v-model="item.country.name"
        :is-bank-account="isBankAccount"
        :validation-errors="errors"
      />
    </v-col>
  </v-row>
</template>
<script>
import ValidationErrors from '@/mixins/ValidationErrors';
import SalutationSelect from '@/components/selects/SalutationSelect';
import CountrySelect from '@/components/selects/CountrySelect';

export default {
  components: {
    SalutationSelect,
    CountrySelect
  },
  mixins: [ValidationErrors],
  props: {
    value: {
      type: Object,
      required: true,
      default: () => ({
        salutation: null,
        fullName: null,
        firstName: null,
        lastName: null,
        street: null,
        postcode: null,
        country: null,
        city: null,
      })
    },
    validationErrors: {
      type: Object,
      default: () => ({})
    },
    withSalutation: {
      type: Boolean,
      required: false,
      default: () => true
    },
    isBankAccount: {
      type: Boolean,
      required: false,
      default: () => false
    },
  },
  data() {
    return {
      item: this.value,
      errors: this.validationErrors,
    };
  },
  computed: {},
  watch: {
    value: {
      deep: true,
      handler() {
        this.item = this.value;
      }
    },
    validationErrors: {
      handler() {
        this.errors = this.validationErrors;
      },
      deep: true
    },
    item: {
      deep: true,
      handler() {
        this.$emit('input', this.item);
      }
    }
  },
  methods: {}
};
</script>
