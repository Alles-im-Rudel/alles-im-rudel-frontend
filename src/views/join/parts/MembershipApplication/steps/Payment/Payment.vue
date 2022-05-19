<template>
  <v-stepper-content step="4">
    <v-card flat>
      <v-card-text>
        <p>
          Alles im Rudel e.V.<br>
          Norderstraße 23 <br>
          25335 Elmshorn <br>
          Deutschland
        </p>
        <p>Gläubiger-ID: DE20AIR00002493867</p><br>
        <p>Mandatsreferenz: {{ mandateReferenceId }}</p>
        <h1>SEPA-Lastschrift-Mandat</h1><br>
        <p>
          Ich ermächtige Alles im Rudel e.V., Zahlungen von meinem Konto mittels Lastschrift einzuziehen. <br>
          Zugleich weise ich mein Kreditinstitut an, die von Alles im Rudel e.V. auf mein Konto gezogenen Lastschriften
          einzulösen. <br>
          Hinweis: Ich kann innerhalb von acht Wochen, beginnend mit dem Belastungsdatum, die Erstattung des belasteten
          Betrags verlangen. Es gelten dabei die mit meinem Kreditinstitut vereinbarten Bedingungen.
        </p>
        <p>Daten des Kontoinhabers</p>
        <v-row>
          <v-col
            cols="12"
            md="6"
            lg="3"
          >
            <v-text-field
              v-model="form.accountFirstName"
              required
              label="Vorname"
              :error="hasErrors('accountFirstName')"
              :error-messages="getErrors('accountFirstName')"
              :hide-details="!hasErrors('accountFirstName')"
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
            lg="3"
          >
            <v-text-field
              v-model="form.accountLastName"
              required
              label="Nachname"
              :error="hasErrors('accountLastName')"
              :error-messages="getErrors('accountLastName')"
              :hide-details="!hasErrors('accountLastName')"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="6"
            lg="3"
          >
            <v-text-field
              v-model="form.accountStreet"
              required
              label="Straße & Hausnummer"
              :error="hasErrors('accountStreet')"
              :error-messages="getErrors('accountStreet')"
              :hide-details="!hasErrors('accountStreet')"
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
            lg="3"
          >
            <v-text-field
              v-model="form.accountPostcode"
              v-mask="'######'"
              required
              label="Postleitzahl"
              :error="hasErrors('accountPostcode')"
              :error-messages="getErrors('accountPostcode')"
              :hide-details="!hasErrors('accountPostcode')"
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
            lg="3"
          >
            <v-text-field
              v-model="form.accountCity"
              required
              label="Stadt"
              :error="hasErrors('accountCity')"
              :error-messages="getErrors('accountCity')"
              :hide-details="!hasErrors('accountCity')"
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
            lg="3"
          >
            <country-select
              v-model="form.accountCountry"
              :validation-errors="errors"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="form.iban"
              v-mask="'FF## #### #### #### #### ##'"
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
              v-mask="'NNNNNNNNNNN'"
              required
              label="BIC"
              :error="hasErrors('bic')"
              :error-messages="getErrors('bic')"
              :hide-details="!hasErrors('bic')"
            />
          </v-col>
          <v-col
            cols="12"
            lg="2"
            md="6"
          >
            <v-text-field
              v-model="now"
              disabled
              label="Datum"
              hide-details
            />
          </v-col>
          <v-col
            cols="12"
            lg="4"
            md="6"
          >
            <v-text-field
              v-model="form.accountSignatureCity"
              required
              label="Ort"
              :error="hasErrors('accountSignatureCity')"
              :error-messages="getErrors('accountSignatureCity')"
              :hide-details="!hasErrors('accountSignatureCity')"
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <ImageUpload
              v-model="form.signature"
              label="Unterschrift hochladen"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
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
import dayjs from 'dayjs';
import CountrySelect from '@/components/selects/CountrySelect';

export default {
  components: {ImageUpload, StepControls, CountrySelect},
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
      mandateReferenceId: null
    };
  },
  computed: {
    isValid() {
      return !!(
          this.form.iban
          && this.form.bic
          && this.form.signature
          && this.form.accountFirstName
          && this.form.accountLastName
          && this.form.accountStreet
          && this.form.accountPostcode
          && this.form.accountCity
          && this.form.accountCountry
          && this.form.accountSignatureCity
      );
    },
    now() {
      return dayjs().format('DD.MM.YYYY');
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
  },
  created() {
    this.getMandateRefernceId();
  },
  methods: {
    getMandateRefernceId() {
      window.axios
          .get('get-mandate-refernce-id')
          .then((response) => {
            this.mandateReferenceId = response.data.data;
          });
    }
  }
};
</script>