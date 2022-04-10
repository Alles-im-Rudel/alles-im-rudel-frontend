<template>
  <div v-if="!isLoading">
    <v-stepper
      v-model="step"
      vertical
      flat
    >
      <v-stepper-step
        :complete="step > 1"
        step="1"
      >
        Wer bist du?
      </v-stepper-step>

      <Personal
        v-model="form"
        :validation-errors="errors"
        @step-back="previousStep"
        @step-continue="nextStep"
      />

      <v-stepper-step
        :complete="step > 2"
        step="2"
      >
        Wo wohnst du?
      </v-stepper-step>

      <Address
        v-model="form"
        :validation-errors="errors"
        @step-back="previousStep"
        @step-continue="nextStep"
      />

      <v-stepper-step
        :complete="step > 3"
        step="3"
      >
        Bei welchen Sparten möchtest du dabei sein?
      </v-stepper-step>

      <Branch
        v-model="form"
        :validation-errors="errors"
        @step-back="previousStep"
        @step-continue="nextStep"
      />

      <v-stepper-step
        :complete="step > 4"
        step="4"
      >
        Wie möchtest du deinen Mitgliedsbeitrag zahlen?
      </v-stepper-step>

      <Payment
        v-model="form"
        :validation-errors="errors"
        @step-back="previousStep"
        @step-continue="nextStep"
      />

      <v-stepper-step
        :complete="step > 5"
        step="5"
      >
        Welches Passwort möchtest du benutzten?
      </v-stepper-step>

      <Password
        v-model="form"
        :validation-errors="errors"
        @step-back="previousStep"
        @step-continue="nextStep"
      />

      <v-stepper-step
        :complete="step > 6"
        step="6"
      >
        Abschließen
      </v-stepper-step>

      <overview
        v-model="form"
        @step-back="previousStep"
        @step-continue="submit"
      />
    </v-stepper>
  </div>
  <div
    v-else
    class="text-center py-16"
  >
    <v-progress-circular
      indeterminate
      color="greyBlue"
      size="48"
    />
    <h5 class="text-h5 mt-8">
      Deine Anfrage wird bearbeitet...
    </h5>
  </div>
</template>

<script>
import ValidationErrors from '@/mixins/ValidationErrors';
import Branch from '@/views/join/parts/MembershipApplication/steps/Branch/Branch';
import Personal from '@/views/join/parts/MembershipApplication/steps/Personal/Personal';
import Address from '@/views/join/parts/MembershipApplication/steps/Address/Address';
import Password from '@/views/join/parts/MembershipApplication/steps/Password/Password';
import Overview from '@/views/join/parts/MembershipApplication/steps/Overview/Overview';
import Payment from '@/views/join/parts/MembershipApplication/steps/Payment/Payment';
import branches from '@/constants/branches';

export default {
  components: {
    Payment,
    Personal,
    Address,
    Branch,
    Password,
    Overview
  },
  mixins: [ValidationErrors],
  data() {
    return {
      step: 1,
      isLoading: false,
      form: {
        branches: [branches.BASE],
        country: 'Deutschland'
      },
      errors: {}
    };
  },
  methods: {
    async submit() {
      this.isLoading = true;
      window.scrollTo(0, 0);

      try {
        const request = new FormData();
        const config = {headers: {'Content-Type': 'multipart/form-data'}};

        request.append('salutation', this.form.salutation,);
        request.append('firstName', this.form.firstName);
        request.append('lastName', this.form.lastName);
        request.append('phone', this.form.phone);
        request.append('birthday', this.form.birthday);
        request.append('street', this.form.street);
        request.append('postcode', this.form.postcode);
        request.append('city', this.form.city);
        request.append('country', this.form.country);
        request.append('iban', this.form.iban);
        request.append('bic', this.form.bic);
        request.append('email', this.form.email);
        request.append('password', this.form.password);
        request.append('passwordRepeat', this.form.passwordRepeat);
        request.append('hasAcceptedDataProtection', this.form.hasAcceptedDataProtection);
        request.append('hasAcceptedMonthlyDebits', this.form.hasAcceptedMonthlyDebits);
        request.append('wantsEmailNotification', this.form.wantsEmailNotification);
        request.append('accountFirstName', this.form.accountFirstName);
        request.append('accountLastName', this.form.accountLastName);
        request.append('accountStreet', this.form.accountStreet);
        request.append('accountPostcode', this.form.accountPostcode);
        request.append('accountCity', this.form.accountCity);
        request.append('accountCountry', this.form.accountCountry);
        request.append('accountSignatureCity', this.form.accountSignatureCity);
        request.append('signature', this.form.signature);
        request.append('branches', JSON.stringify(this.form.branches));

        let {data} = await window.axios.post('/members/register', request, config);
        this.$root.$snackbar.open(data.message);
        this.pushRouteTo('home');
      } catch (error) {
        this.syncErrors(error);
      } finally {
        this.isLoading = false;
      }
    },
    nextStep() {
      this.step++;
    },
    previousStep() {
      if (this.step > 1) {
        this.step--;
      }
    }
  }
};
</script>
