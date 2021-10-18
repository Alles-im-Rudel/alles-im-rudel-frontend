<template>
  <v-stepper
      v-model="e6"
      vertical
  >
    <v-stepper-step
        :complete="e6 > 1"
        step="1"
    >
      Wer bist du?
      <small>Gebe bitte deine Daten ein!</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-row justify="center">
        <v-col cols="12" md="2">
          <salutaion-select
              v-model="form.salutation"
              :validation-errors="errors"
          />
        </v-col>
        <v-col cols="12" md="5">
          <v-text-field
              v-model="form.firstName"
              required
              label="Vorname"
              :error="hasErrors('firstName')"
              :error-messages="getErrors('firstName')"
          />
        </v-col>
        <v-col cols="12" md="5">
          <v-text-field
              v-model="form.lastName"
              required
              label="Nachname"
              :error="hasErrors('lastName')"
              :error-messages="getErrors('lastName')"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
              v-model="form.username"
              required
              label="Benutzername"
              :error="hasErrors('username')"
              :error-messages="getErrors('username')"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
              v-model="form.email"
              required
              label="Email"
              :error="hasErrors('email')"
              :error-messages="getErrors('email')"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
              v-model="form.phone"
              required
              label="Telefon"
              :error="hasErrors('phone')"
              :error-messages="getErrors('phone')"
          />
        </v-col>
      </v-row>
      <v-btn
          color="primary"
          @click="e6 = 2"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
        :complete="e6 > 2"
        step="2"
    >
      Wo wohnst du?
      <small>Gebe bitte deine Addresse ein!</small>
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-row justify="center">
        <v-col cols="12" md="3">
          <v-text-field
              v-model="form.street"
              required
              label="Straße / Hausnummer"
              :error="hasErrors('street')"
              :error-messages="getErrors('street')"
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
              v-model="form.postcode"
              required
              label="PLZ"
              :error="hasErrors('postcode')"
              :error-messages="getErrors('postcode')"
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
              v-model="form.city"
              required
              label="Stadt"
              :error="hasErrors('city')"
              :error-messages="getErrors('city')"
          />
        </v-col>
        <v-col cols="12" md="3">
          <country-select v-model="form.country" :validation-errors="errors"/>
        </v-col>
      </v-row>
      <v-btn
          color="primary"
          @click="e6 = 3"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
        :complete="e6 > 3"
        step="3"
    >
      Wie möchtest du deinen Mitgliedsbeitrag zahlen?
      <small>Gebe bitte deine Bankdaten ein von dem wir den Mitgliedsbeitrag Monatlich abbuchen!</small>
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-text-field
              v-model="form.iban"
              required
              label="Iban"
              :error="hasErrors('iban')"
              :error-messages="getErrors('iban')"
          />
        </v-col>
      </v-row>
      <v-btn
          color="primary"
          @click="e6 = 1"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>
  </v-stepper>
</template>
<script>
import ValidationErrors from '@/mixins/ValidationErros';
import SalutaionSelect from '@/components/selects/SalutaionSelect';
import CountrySelect from '@/components/selects/CountrySelect';

export default {
  mixins: [ValidationErrors],
  components: {
    SalutaionSelect,
    CountrySelect
  },
  parts: {
    value: {
      type: Object,
      default: () => {
      }
    },
    validationErrors: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      e6: 1,
      form: {},
      errors: {}
    }
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
}
</script>