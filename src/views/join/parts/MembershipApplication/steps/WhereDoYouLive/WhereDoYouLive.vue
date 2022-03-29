<template>
  <v-row justify="center">
    <v-col
      cols="12"
      md="3"
    >
      <v-text-field
        v-model="form.street"
        required
        label="Straße / Hausnummer"
        :error="hasErrors('street')"
        :error-messages="getErrors('street')"
      />
    </v-col>
    <v-col
      cols="12"
      md="3"
    >
      <v-text-field
        v-model="form.postcode"
        required
        label="PLZ"
        :error="hasErrors('postcode')"
        :error-messages="getErrors('postcode')"
      />
    </v-col>
    <v-col
      cols="12"
      md="3"
    >
      <v-text-field
        v-model="form.city"
        required
        label="Stadt"
        :error="hasErrors('city')"
        :error-messages="getErrors('city')"
      />
    </v-col>
    <v-col
      cols="12"
      md="3"
    >
      <country-select
        v-model="form.country"
        :validation-errors="errors"
      />
    </v-col>
  </v-row>
</template>
<script>
import ValidationErrors from '@/mixins/ValidationErros';
import CountrySelect from '@/components/selects/CountrySelect';

export default {
  components: {
    CountrySelect
  },
  mixins: [ValidationErrors],
  props: {
    value: {
      type: Object,
      default: () => ({
        branches: []
      })
    },
    validationErrors: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      form: {},
      errors: {},
      isLoading: false,
    };
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.form = this.value;
      }
    },
    validationErrors: {
      handler() {
        this.errors = this.validationErrors;
      },
      deep: true
    },
    form: {
      deep: true,
      handler() {
        this.$emit('input', this.form);
      }
    }
  }
};
</script>