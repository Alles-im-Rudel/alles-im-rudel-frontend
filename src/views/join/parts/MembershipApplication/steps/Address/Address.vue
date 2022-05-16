<template>
  <v-stepper-content step="2">
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="form.street"
          required
          label="Straße & Hausnummer"
          :error="hasErrors('street')"
          :error-messages="getErrors('street')"
          :hide-details="!hasErrors('street')"
        />
      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <v-text-field
          v-model="form.postcode"
          v-mask="'######'"
          required
          label="PLZ"
          :error="hasErrors('postcode')"
          :error-messages="getErrors('postcode')"
          :hide-details="!hasErrors('postcode')"
        />
      </v-col>
      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          v-model="form.city"
          required
          label="Stadt"
          :error="hasErrors('city')"
          :error-messages="getErrors('city')"
          :hide-details="!hasErrors('city')"
        />
      </v-col>
      <v-col cols="12">
        <country-select
          v-model="form.country"
          :validation-errors="errors"
        />
      </v-col>
    </v-row>
    <StepControls
      :is-valid="isValid"
      @step-back="$emit('step-back')"
      @step-continue="$emit('step-continue')"
    />
  </v-stepper-content>
</template>

<script>
import ValidationErrors from '@/mixins/ValidationErrors';
import CountrySelect from '@/components/selects/CountrySelect';
import StepControls from '@/views/join/parts/MembershipApplication/parts/StepControls';

export default {
  components: {
    StepControls,
    CountrySelect
  },
  mixins: [ValidationErrors],
  props: {
    value: {
      type: Object,
      default: () => ({
        street: null,
        city: null,
        country: null,
        postcode: null
      })
    },
    validationErrors: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      form: this.value,
      errors: {},
      isLoading: false,
    };
  },
  computed: {
    isValid() {
      return !!this.form.street
        && !!this.form.postcode
        && !!this.form.city
        && !!this.form.country;
    },
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