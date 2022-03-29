<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        md="6"
        lg="3"
      >
        <v-card>
          <v-card-title class="headline py-2">
            Adresse:
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
            </v-row>
          </v-card-text>
          <v-card-title class="headline py-2">
            Kontaktdaten:
          </v-card-title>
          <v-card-text class="text-left">
            <v-row>
              <v-col
                cols="12"
                class="py-0"
              >
                {{ form.phone }}
              </v-col>
              <v-col
                cols="12"
                class="py-0"
              >
                {{ form.email }}
              </v-col>
              <v-col
                cols="12"
                class="py-0"
              >
                {{ form.username }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-card>
          <v-card-title class="headline py-2">
            Sparten:
          </v-card-title>
          <v-card-text class="text-left">
            <v-row
              v-for="branch in form.branches"
              :key="branch.id"
              class="py-1"
            >
              <v-col
                cols="12"
                class="py-0"
              >
                {{ branch.name }}
              </v-col>
              <v-col
                cols="12"
                class="py-0"
              >
                {{ branch.description }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="3"
      >
        <v-card>
          <v-card-title class="headline py-2">
            Bankdaten:
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
                Gesamtbetrag: {{ totalPrice }} €
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title />

          <v-card-text>
            <v-checkbox
              v-model="form.hasAcceptedDataProtection"
            >
              <template #label>
                Hiermit akzeptiere ich die&nbsp;<a
                  href="/privacy-notice"
                  target="_blank"
                >Datenschutzerklärung</a>
              </template>
            </v-checkbox>
            <v-checkbox
              v-model="form.hasAcceptedMonthlyDebits"
              label="Hiermit bestätige ich die monatliche Abbuchung des Vereinsbeitrags und der Spartenbeitäge."
            />
            <v-checkbox
              v-model="form.wantsEmailNotification"
              label="Hiermit bestätige ich, dass ich per E-Mail benachrichtigt werden darf."
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>

export default {
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
      form: {}
    };
  },
  computed: {
    totalPrice() {
      return this.form.branches ? this.form.branches.reduce((a, b) => a + (b['price'] || 0), 0) + 1 : 1;
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
  }
};
</script>
<style>
  .v-checkbox .v-label a{pointer-events:all;}
</style>