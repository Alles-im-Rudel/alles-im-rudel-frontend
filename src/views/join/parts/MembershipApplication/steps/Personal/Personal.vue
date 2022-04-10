<template>
  <v-stepper-content step="1">
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
          :hide-details="!hasErrors('firstName')"
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
          :hide-details="!hasErrors('lastName')"
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
          :hide-details="!hasErrors('phone')"
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
          :error="hasErrors('birthday')"
          :error-messages="getErrors('birthday')"
          :hide-details="!hasErrors('birthday')"
        />
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="form.email"
          required
          label="E-Mail"
          :error="hasErrors('email')"
          :error-messages="getErrors('email')"
          :hide-details="!hasErrors('email')"
        >
          <template #append>
            <v-progress-circular
              v-if="emailIsLoading"
              size="16"
              indeterminate
              color="primary"
            />
            <v-icon
              v-else
              :class="emailIsValid ? 'success--text' : 'error--text'"
            >
              {{ emailIsValid ? 'fa-check' : 'fa-times' }}
            </v-icon>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
    <StepControls
      :is-valid="isValid"
      :has-back="false"
      @step-continue="$emit('step-continue')"
    />
  </v-stepper-content>
</template>

<script>
import ValidationErrors from '@/mixins/ValidationErrors';
import SalutationSelect from '@/components/selects/SalutationSelect';
import DatePicker from '@/components/picker/DatePicker';
import dayjs from 'dayjs';
import StepControls from '@/views/join/parts/MembershipApplication/parts/StepControls';

export default {
  components: {
    StepControls,
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
      form: this.value,
      errors: {},
      maxDate: dayjs().format('YYYY-MM-DD'),
      emailIsValid: false,
      emailIsLoading: false,
    };
  },
  computed: {
    isValid() {
      return !!this.form.salutation
        && !!this.form.firstName
        && !!this.form.lastName
        && !!this.form.phone
        && !!this.form.birthday
        && this.emailIsValid
        && !this.emailIsLoading;
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
    },
    'form.email': function () {
      this.emailIsValid = false;
      if (this.form.email) {
        setTimeout(this.checkEmail, 500, this.form.email);
      }
    }
  },
  methods: {
    async checkEmail(value) {
      if (this.form.email !== value) {
        return;
      }

      this.emailIsLoading = true;
      try {
        let {data} = await window.axios.get(`/profile/check-email/${this.form.email}`);
        this.emailIsValid = data.isValid;
      } catch (error) {
        // such emptiness
      } finally {
        this.emailIsLoading = false;
      }
    }
  }
};
</script>