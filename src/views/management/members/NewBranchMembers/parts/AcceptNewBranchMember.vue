<template>
  <v-card
    v-if="user"
    tile
  >
    <v-card-title>
      Neuanmeldung von: {{ user.fullName }} bestätigen
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
                  {{ user.fullName }}<br>
                  {{ user.street }}<br>
                  {{ user.city }}<br>
                  {{ user.country.name }}<br>
                </v-col>
                <v-col
                  cols="12"
                  lg="6"
                  md="6"
                  sm="12"
                >
                  <div class="flex align-center">
                    {{ user.email }}
                    <v-tooltip top>
                      <template v-slot:activator="{ on: tooltip }">
                        <v-icon v-on="{ ...tooltip }">
                          {{ getIcon }}
                        </v-icon>
                      </template>
                      <span>{{ getTooltip }}</span>
                    </v-tooltip>
                  </div>
                  {{ user.birthday | date }} {{ user.age }} Jahre alt<br>
                  {{ user.bankAccount.iban }}<br>
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
              Sparte
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
                  {{ branchUserMemberShip.branch.name }}
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
import {cloneDeep} from 'lodash';
import hasArrayDifferenz from '@/mixins/HasArrayDifferenz';

export default {
  mixins: [Permissions, hasArrayDifferenz],
  props: {
    user: {
      type: Object,
      required: true
    },
    branchUserMemberShip: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    getIcon() {
      return this.user.emailVerifiedAt ? 'fa-check' : 'fa-times';
    },
    getTooltip() {
      return this.user.emailVerifiedAt ? 'Email wurde Bestätigt' : 'Email wurde nicht Bestätigt';
    }
  },
  created() {
  },
  methods: {
    accept() {
      this.isLoading = true;
      window.axios
          .put(`manage-branch-applications/accept/${this.branchUserMemberShip.id}`)
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
          .put(`manage-branch-applications/reject/${this.branchUserMemberShip.id}`)
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
