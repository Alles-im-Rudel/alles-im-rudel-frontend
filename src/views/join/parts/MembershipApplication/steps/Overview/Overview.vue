<template>
  <v-stepper-content step="6">
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-card flat>
          <v-card-title class="text-subtitle-1 pt-0 pb-5">
            Persönliche Informationen
          </v-card-title>
          <v-card-text class="text-left">
            <v-row>
              <v-col
                cols="12"
                class="py-0"
              >
                {{ form.salutation }} {{ form.firstName }} {{ form.lastName }}
              </v-col>
              <v-col
                cols="12"
                class="py-0"
              >
                {{ form.postcode }} {{ form.city }} {{ form.street }}
              </v-col>
              <v-col
                cols="12"
                class="py-0"
              >
                {{ form.country }}
              </v-col>
              <v-col
                cols="12"
                class="py-0 pt-3"
              >
                {{ form.phone }}
              </v-col>
              <v-col
                cols="12"
                class="py-0"
              >
                {{ form.email }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-card flat>
          <v-card-title class="text-subtitle-1 pt-0 pb-5">
            Bankdaten
          </v-card-title>
          <v-card-text class="text-left">
            <v-row>
              <v-col
                cols="12"
                class="py-0"
              >
                {{ form.iban }}
              </v-col>
              <v-col
                cols="12"
                class="py-0"
              >
                {{ form.bic }}
              </v-col>
              <v-col
                cols="12"
                class="py-0"
              >
                Gesamtbetrag: {{ totalPrice }} €
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card flat>
          <v-card-title class="text-subtitle-1 pt-0 pb-3">
            Sparten
          </v-card-title>
          <v-card-text class="text-left">
            <ul>
              <li
                v-for="branch in selectedBranches"
                :key="branch.id"
              >
                {{ branch.name }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card flat>
          <v-card-text class="pt-0">
            <OverviewCheckbox
              v-model="form.hasAcceptedDataProtection"
              class="pb-2"
            >
              Hiermit akzeptiere ich die&nbsp;<a
                href="/privacy-notice"
                target="_blank"
              >Datenschutzerklärung</a>.
            </OverviewCheckbox>

            <OverviewCheckbox
              v-model="form.hasAcceptedMonthlyDebits"
              class="pb-2"
            >
              Hiermit bestätige ich die monatliche Abbuchung des Vereinsbeitrags und der Spartenbeitäge.
            </OverviewCheckbox>

            <OverviewCheckbox v-model="form.wantsEmailNotification">
              Hiermit bestätige ich, dass ich per E-Mail benachrichtigt werden darf.
            </OverviewCheckbox>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <StepControls
      :is-valid="isValid"
      continue-label="Fertigstellen"
      @step-back="$emit('step-back')"
      @step-continue="$emit('step-continue')"
    />
  </v-stepper-content>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import OverviewCheckbox from '@/views/join/parts/MembershipApplication/steps/Overview/parts/OverviewCheckbox';
import StepControls from '@/views/join/parts/MembershipApplication/parts/StepControls';

export default {
  components: {StepControls, OverviewCheckbox},
  props: {
    value: {
      type: Object,
      default: () => ({
        branches: []
      })
    }
  },
  data() {
    return {
      form: this.value
    };
  },
  computed: {
    ...mapGetters('branch', ['branches']),
    totalPrice() {
      return this.selectedBranches.reduce((acc, branch) => {
        return acc + branch.price;
      }, 0);
    },
    selectedBranches() {
      return this.branches.filter((branch) => this.form.branches.includes(branch.id));
    },
    isValid() {
      return !!this.form.hasAcceptedDataProtection
        && !!this.form.hasAcceptedMonthlyDebits
        && !!this.form.wantsEmailNotification;
    },
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
    this.getBranches();
  },
  methods: {
    ...mapActions('branch', ['getBranches']),
  }
};
</script>

<style>
.v-checkbox .v-label a {
  pointer-events: all;
}
</style>