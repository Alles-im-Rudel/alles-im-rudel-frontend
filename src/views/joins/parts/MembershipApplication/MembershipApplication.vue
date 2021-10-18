<template>
  <div>
    <h1 class="py-6">Jetzt Mitglied werden!!</h1>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
            :complete="e1 > 1"
            step="1"
        >
          Benutzer Stammdaten
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
            :complete="e1 > 2"
            step="2"
        >
          Spartenauswahl
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">
          Eingabe bestätigen
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card>
            <user-data
                v-model="form"
                :validation-errors="errors"
            />
          </v-card>

          <v-btn
              color="primary"
              @click="e1 = 2"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <branch-data v-model="form" :validation-errors="errors" />

          <v-btn
              color="primary"
              @click="e1 = 3"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
          ></v-card>

          <v-btn
              color="primary"
              @click="e1 = 1"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script>
import UserData from "@/views/joins/parts/MembershipApplication/steps/UserData";
import BranchData from "@/views/joins/parts/MembershipApplication/steps/BranchData";
import ValidationErrors from "@/mixins/ValidationErros";

export default {
  components: {
    UserData,
    BranchData
  },
  mixins: [ValidationErrors],
  data() {
    return {
      e1: 1,
      form: {},
      errors: {}
    }
  },
}
</script>
