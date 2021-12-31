<template>
  <div>
    <h1 class="py-6">Jetzt Mitglied werden!!</h1>
    <v-stepper
        v-model="step"
        vertical
    >
      <v-stepper-step
          :complete="step > 1"
          step="1"
      >
        Wer bist du?
        <small>Gebe bitte deine Daten ein!</small>
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card flat>
          <v-card-text class="ma-0 pa-0">
            <who-are-you v-model="form" :validation-errors="errors" />
          </v-card-text>
          <step-controls :is-valid="stepOneIsValid" @step-back="previousStep" @step-continue="nextStep" />
        </v-card>
      </v-stepper-content>
      <v-stepper-step
          :complete="step > 2"
          step="2"
      >
        Wo wohnst du?
        <small>Gebe bitte deine Addresse ein!</small>
      </v-stepper-step>

      <v-stepper-content step="2">
        <v-card flat>
          <v-card-text class="ma-0 pa-0">
            <where-do-you-live v-model="form" :validation-errors="errors" />
          </v-card-text>
          <step-controls :is-valid="stepTwoIsValid" @step-back="previousStep" @step-continue="nextStep" />
        </v-card>
      </v-stepper-content>

      <v-stepper-step
          :complete="step > 3"
          step="3"
      >
        Wie möchtest du deinen Mitgliedsbeitrag zahlen?
        <small>Gebe bitte deine Bankdaten ein von dem wir den Mitgliedsbeitrag Monatlich abbuchen!</small>
      </v-stepper-step>

      <v-stepper-content step="3">
        <v-card flat>
          <v-card-text class="ma-0 pa-0">
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
          </v-card-text>
          <step-controls :is-valid="stepThreeIsValid" @step-back="previousStep" @step-continue="nextStep" />
        </v-card>
      </v-stepper-content>

      <v-stepper-step
          :complete="step > 4"
          step="4"
      >
        Bei welchen Sparten möchtest du dabei sein?
        <small>Bitte wähle alle Sparten aus die dich Interessieren!</small>
      </v-stepper-step>

      <v-stepper-content step="4">
        <v-card flat>
          <v-card-text class="ma-0 pa-0">
            <branch-data
                v-model="form"
                :validation-errors="errors"
            />
          </v-card-text>
          <step-controls :is-valid="stepFourIsValid" @step-back="previousStep" @step-continue="nextStep" />
        </v-card>
      </v-stepper-content>

      <v-stepper-step
          :complete="step > 5"
          step="5"
      >
        Website Login
        <small>Bitte gebe deine Gewünschten Website Logindaten an!</small>
      </v-stepper-step>

      <v-stepper-content step="5">
        <v-card flat>
          <v-card-text class="ma-0 pa-0">
            <user v-model="form" :validation-errors="errors" />
          </v-card-text>
          <step-controls :is-valid="stepFiveIsValid" @step-back="previousStep" @step-continue="nextStep" />
        </v-card>
      </v-stepper-content>

      <v-stepper-step
          :complete="step > 6"
          step="6"
      >
        Übersicht
        <small>Bitte korrigiere deine eingegebenen Daten!</small>
      </v-stepper-step>

      <v-stepper-content step="6">
        <v-card flat>
          <v-card-text class="ma-0 pa-0">
            <overview v-model="form" />
          </v-card-text>
          <step-controls :is-valid="stepSixIsValid" continue-label="Fertigstellen" @step-back="previousStep" @step-continue="nextStep" />
        </v-card>
      </v-stepper-content>
    </v-stepper>
  </div>
</template>
<script>

import ValidationErrors from "@/mixins/ValidationErros";
import BranchData from "@/views/joins/parts/MembershipApplication/steps/Branch/BranchesSelect";
import StepControls from "@/views/joins/parts/MembershipApplication/parts/StepControls";
import WhoAreYou from "@/views/joins/parts/MembershipApplication/steps/WhoAreYou/WhoAreYou";
import WhereDoYouLive from "@/views/joins/parts/MembershipApplication/steps/WhereDoYouLive/WhereDoYouLive";
import User from "@/views/joins/parts/MembershipApplication/steps/User/User";
import Overview from "@/views/joins/parts/MembershipApplication/steps/Overview/Overview";


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
        branches: []
      },
      errors: {}
    }
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
      return !!this.form.iban;
    },
    stepFourIsValid() {
      return true;
    },
    stepFiveIsValid() {
      return !!this.form.username
          && !!this.form.email
          && !!this.form.password
          && (this.form.password === this.form.passwordRepeat);
    },
    stepSixIsValid() {
      return true;
    },
  },
  methods: {
    nextStep() {
      this.step++;
    },
    previousStep() {
      if (this.step > 1) {
        this.step--;
      }
    }
  }
}
</script>
