<template>
  <div>
    <h1 class="py-6">
      Jetzt Mitglied werden!!
    </h1>
    <v-stepper
      v-model="step"
      vertical
    >
      <v-stepper-step
        :complete="step > 1"
        step="1"
      >
        Wer bist du?
      </v-stepper-step>

      <v-stepper-content step="1">
        <who-are-you
          v-model="form"
          :validation-errors="errors"
        />
        <step-controls
          :is-valid="stepOneIsValid"
          :has-back="false"
          @step-continue="nextStep"
        />
      </v-stepper-content>
      <v-stepper-step
        :complete="step > 2"
        step="2"
      >
        Wo wohnst du?
      </v-stepper-step>

      <v-stepper-content step="2">
        <where-do-you-live
          v-model="form"
          :validation-errors="errors"
        />
        <step-controls
          :is-valid="stepTwoIsValid"
          @step-back="previousStep"
          @step-continue="nextStep"
        />
      </v-stepper-content>

      <v-stepper-step
        :complete="step > 3"
        step="3"
      >
        Wie möchtest du deinen Mitgliedsbeitrag zahlen?
      </v-stepper-step>

      <v-stepper-content step="3">
        <v-card flat>
          <v-card-text class="ma-0 px-0">
            <v-row justify="center">
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="form.iban"
                  required
                  label="Iban"
                  :error="hasErrors('iban')"
                  :error-messages="getErrors('iban')"
                />
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="form.bic"
                  required
                  label="Bic"
                  :error="hasErrors('bic')"
                  :error-messages="getErrors('bic')"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <step-controls
            :is-valid="stepThreeIsValid"
            @step-back="previousStep"
            @step-continue="nextStep"
          />
        </v-card>
      </v-stepper-content>

      <v-stepper-step
        :complete="step > 4"
        step="4"
      >
        Bei welchen Sparten möchtest du dabei sein?
      </v-stepper-step>

      <v-stepper-content step="4">
        <branch-data
          v-model="form"
          :validation-errors="errors"
        />
        <step-controls
          :is-valid="stepFourIsValid"
          @step-back="previousStep"
          @step-continue="nextStep"
        />
      </v-stepper-content>

      <v-stepper-step
        :complete="step > 5"
        step="5"
      >
        Welches Passwort möchtest du benutzten?
      </v-stepper-step>

      <v-stepper-content step="5">
        <user
          v-model="form"
          :validation-errors="errors"
        />
        <step-controls
          :is-valid="stepFiveIsValid"
          @step-back="previousStep"
          @step-continue="nextStep"
        />
      </v-stepper-content>

      <v-stepper-step
        :complete="step > 6"
        step="6"
      >
        Abschließen
      </v-stepper-step>

      <v-stepper-content step="6">
        <overview v-model="form" />
        <step-controls
          :is-valid="stepSixIsValid"
          continue-label="Fertigstellen"
          @step-back="previousStep"
          @step-continue="submit"
        />
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script>
import ValidationErrors from '@/mixins/ValidationErros';
import BranchData from '@/views/join/parts/MembershipApplication/steps/Branch/BranchesSelect';
import StepControls from '@/views/join/parts/MembershipApplication/parts/StepControls';
import WhoAreYou from '@/views/join/parts/MembershipApplication/steps/WhoAreYou/WhoAreYou';
import WhereDoYouLive from '@/views/join/parts/MembershipApplication/steps/WhereDoYouLive/WhereDoYouLive';
import User from '@/views/join/parts/MembershipApplication/steps/User/User';
import Overview from '@/views/join/parts/MembershipApplication/steps/Overview/Overview';

export default {
  components: {
    WhoAreYou,
    WhereDoYouLive,
    BranchData,
    StepControls,
    User,
    Overview
  },
  mixins: [ValidationErrors],
  data() {
    return {
      step: 1,
      steps: [
        {}
      ],
      form: {
        branches: [
          {
            id: 1
          }
        ]
      },
      errors: {}
    };
  },
  computed: {
    stepOneIsValid() {
      return !!this.form.salutation
          && !!this.form.firstName
          && !!this.form.lastName
          && !!this.form.phone
          && !!this.form.birthday;
    },
    stepTwoIsValid() {
      return !!this.form.street
          && !!this.form.postcode
          && !!this.form.city
          && !!this.form.country;
    },
    stepThreeIsValid() {
      return !!this.form.iban
          && !!this.form.bic;
    },
    stepFourIsValid() {
      return true;
    },
    stepFiveIsValid() {
      return !!this.form.email
          && !!this.form.password
          && (this.form.password === this.form.passwordRepeat);
    },
    stepSixIsValid() {
      return this.stepOneIsValid
          && this.stepTwoIsValid
          && this.stepThreeIsValid
          && this.stepFourIsValid
          && this.stepFourIsValid
          && this.stepFiveIsValid
          && !!this.form.hasAcceptedDataProtection
          && !!this.form.hasAcceptedMonthlyDebits
          && !!this.form.signature
          && !!this.form.wantsEmailNotification;
    },
  },
  methods: {
    nextStep() {
      this.step++;
    },
    async submit() {
      this.isLoading = true;
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
        request.append('signature', this.form.signature);
        request.append('branches', JSON.stringify(this.form.branches.map(branch => {
          return branch.id;
        })));

        let {data} = await window.axios.post('/members/register', request, config);
        this.$root.$snackbar.open(data.message);
        this.pushRouteTo('home');
      } catch (error) {
        this.errors = error;
      } finally {
        this.isLoading = false;
      }
    },
    previousStep() {
      if (this.step > 1) {
        this.step--;
      }
    }
  }
};
</script>
