<template>
  <v-row justify="center">
    <v-col
      cols="12"
      md="2"
    >
      <salutaion-select
        v-model="form.salutation"
        :validation-errors="errors"
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
      />
    </v-col>
  </v-row>
</template>
<script>
import ValidationErrors from '@/mixins/ValidationErros';
import SalutaionSelect from '@/components/selects/SalutaionSelect';
import DatePicker from '@/components/picker/DatePicker';
import dayjs from 'dayjs';

export default {
  components: {
    SalutaionSelect,
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