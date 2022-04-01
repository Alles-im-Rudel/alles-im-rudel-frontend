<template>
  <v-row justify="center">
    <v-col
      cols="12"
      md="2"
    >
      <SalutationSelect
        v-model="form.salutation"
        :validation-errors="errors"
        :hide-details="true"
      />
    </v-col>
    <v-col
      cols="12"
      md="5"
    >
      <v-text-field
        v-model="form.firstName"
        required
        label="Vorname"
        :error="hasErrors('firstName')"
        :error-messages="getErrors('firstName')"
        hide-details
      />
    </v-col>
    <v-col
      cols="12"
      md="5"
    >
      <v-text-field
        v-model="form.lastName"
        required
        label="Nachname"
        :error="hasErrors('lastName')"
        :error-messages="getErrors('lastName')"
        hide-details
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <v-text-field
        v-model="form.phone"
        required
        label="Telefon"
        :error="hasErrors('phone')"
        :error-messages="getErrors('phone')"
        hide-details
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <date-picker
        v-model="form.birthday"
        label="Geburtstag"
        :max-date="maxDate"
        :hide-details="true"
      />
    </v-col>
  </v-row>
</template>
<script>
import ValidationErrors from '@/mixins/ValidationErros';
import SalutationSelect from '@/components/selects/SalutationSelect';
import DatePicker from '@/components/picker/DatePicker';
import dayjs from 'dayjs';

export default {
  components: {
    SalutationSelect,
    DatePicker
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
      maxDate: dayjs().format('YYYY-MM-DD')
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