<template>
  <v-card
    tile
  >
    <v-card-title>
      Neuanmeldung von: {{ member.fullName }} bestätigen
      <v-spacer />
      <v-btn
        icon
        @click="close"
      >
        <v-icon>fa-times</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-row>
        <v-col
          cols="12"
          lg="6"
          md="6"
          sm="12"
        >
          <v-card>
            <v-card-title>
              Benutzerdaten
            </v-card-title>
            <v-divider />
            <v-card-text class="title text-left">
              <v-row>
                <v-col
                  cols="12"
                  lg="6"
                  md="6"
                  sm="12"
                >
                  {{ member.fullName }}<br>
                  {{ member.street }}<br>
                  {{ member.city }}<br>
                  {{ member.country.name }}<br>
                </v-col>
                <v-col
                  cols="12"
                  lg="6"
                  md="6"
                  sm="12"
                >
                  <div class="flex align-center">
                    {{ member.email }}
                    <v-tooltip top>
                      <template v-slot:activator="{ on: tooltip }">
                        <v-icon v-on="{ ...tooltip }">
                          {{ getIcon }}
                        </v-icon>
                      </template>
                      <span>{{ getTooltip }}</span>
                    </v-tooltip>
                  </div>
                  {{ member.birthday | date }} {{ member.age }} Jahre alt<br>
                  {{ member.bankAccount.iban }}<br>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          lg="6"
          md="6"
          sm="12"
        >
          <v-card>
            <v-card-title>
              Sparten
            </v-card-title>
            <v-divider />
            <v-card-text class="title text-left">
              <v-row>
                <v-col
                  v-for="branchUserMemberShip in member.branchUserMemberShips"
                  :key="branchUserMemberShip.id"
                  cols="12"
                  lg="6"
                  md="6"
                  sm="12"
                >
                  {{ branchUserMemberShip.branch.name }}<br>
                  {{ branchUserMemberShip.branch.price }} €<br>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-btn
        :loading="isLoading"
        color="error"
        @click="reject"
      >
        Ablehnen
      </v-btn>
      <v-spacer />
      <v-btn
        color="success"
        :loading="isLoading"
        @click="accept"
      >
        Bestätigen
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Permissions from '@/mixins/Permissions';
import hasArrayDifferenz from '@/mixins/HasArrayDifferenz';

export default {
  mixins: [Permissions, hasArrayDifferenz],
  props: {
    member: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    getIcon() {
      return this.member.emailVerifiedAt ? 'fa-check' : 'fa-times';
    },
    getTooltip() {
      return this.member.emailVerifiedAt ? 'Email wurde Bestätigt' : 'Email wurde nicht Bestätigt';
    }
  },
  created() {},
  methods: {
    accept() {
      this.isLoading = true;
      window.axios
          .put(`manage-member-ship-applications/accept/${this.member.id}`)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
            this.close();
            this.$emit('reload');
          })
          .finally(() => (this.isLoading = false));
    },
    reject() {
      this.isLoading = true;
      window.axios
          .put(`manage-member-ship-applications/reject/${this.member.id}`)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
            this.close();
            this.$emit('reload');
          })
          .finally(() => (this.isLoading = false));
    },
    close() {
      this.$emit('close');
    }
  }
};
</script>
