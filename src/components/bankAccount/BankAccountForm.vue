<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        md="6"
        lg="1"
      >
        <v-text-field
          v-model="bankAccount.bic"
          v-mask="'NNNNNNNNNNN'"
          label="BIC"
          :error="hasErrors('bankAccountBic')"
          :error-messages="getErrors('bankAccountBic')"
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="2"
      >
        <v-text-field
          v-model="bankAccount.iban"
          v-mask="'FF## #### #### #### #### ##'"
          label="IBAN"
          :error="hasErrors('bankAccountIban')"
          :error-messages="getErrors('bankAccountIban')"
        />
      </v-col>
    </v-row>
    <address-form
      v-model="bankAccount"
      :with-salutation="false"
      is-bank-account
      :validation-errors="errors"
    />
    <v-row>
      <v-col
        cols="12"
        md="6"
        lg="1"
      >
        <v-text-field
          v-model="sepaDate"
          label="Datum"
          disabled
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="2"
      >
        <v-text-field
          v-model="bankAccount.signatureCity"
          label="Ort"
          disabled
          :error="hasErrors('signatureCity')"
          :error-messages="getErrors('signatureCity')"
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <ImageUpload
          v-model="bankAccount.signature.image"
          label="Unterschrift hochladen"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import ValidationErrors from '@/mixins/ValidationErrors';
import AddressForm from '@/components/Address/AddressForm';
import dayjs from 'dayjs';
import ImageUpload from '@/components/images/ImageUpload';

export default {
  components: {
    AddressForm,
    ImageUpload
  },
  mixins: [ValidationErrors],
  props: {
    value: {
      type: Object,
      required: true,
      default: () => ({
        bic: null,
        city: null,
        country: null,
        firstName: null,
        lastName: null,
        iban: false,
        postcode: false,
        signature: null,
        signatureCity: null,
        street: null
      })
    },
    validationErrors: {
      type: Object,
      default: () => ({})
    },
    isProfil: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      bankAccount: this.value,
      errors: this.validationErrors,
    };
  },
  computed: {
    sepaDate() {
      return  dayjs(this.bankAccount.createdAt).format('DD.MM.YYYY');
    }
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.bankAccount = this.value;
      }
    },
    validationErrors: {
      handler() {
        this.errors = this.validationErrors;
      },
      deep: true
    },
    user: {
      deep: true,
      handler() {
        this.$emit('input', this.bankAccount);
      }
    }
  },
  methods: {
  }
};
</script>
