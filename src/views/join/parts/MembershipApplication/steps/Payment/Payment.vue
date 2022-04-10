<template>
  <v-stepper-content step="4">
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="form.iban"
          required
          label="IBAN"
          :error="hasErrors('iban')"
          :error-messages="getErrors('iban')"
          :hide-details="!hasErrors('iban')"
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="form.bic"
          required
          label="BIC"
          :error="hasErrors('bic')"
          :error-messages="getErrors('bic')"
          :hide-details="!hasErrors('bic')"
        />
      </v-col>
      <v-col cols="12">
        <ImageUpload
          v-model="form.signature"
          label="Unterschrift hochladen"
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
import StepControls from '@/views/join/parts/MembershipApplication/parts/StepControls';
import ValidationErrors from '@/mixins/ValidationErrors';
import ImageUpload from '@/components/images/ImageUpload';

export default {
  components: {ImageUpload, StepControls},
  mixins: [ValidationErrors],
  props: {
    value: {
      type: Object,
      required: true,
      default: () => ({
        iban: null,
        bic: null,
      }),
    },
    validationErrors: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      form: this.value,
    };
  },
  computed: {
    isValid() {
      return !!(this.form.iban && this.form.bic && this.form.signature);
    }
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.form = this.value;
      }
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