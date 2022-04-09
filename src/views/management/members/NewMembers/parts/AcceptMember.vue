<template>
  <v-card
    v-if="member.id"
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
                  {{ member.memberShip.street }}<br>
                  {{ member.memberShip.city }}<br>
                  {{ member.memberShip.country.name }}<br>
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
                  {{ member.memberShip.iban }}<br>
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
                  v-for="branch in member.memberShip.branches"
                  :key="branch.id"
                  cols="12"
                  lg="6"
                  md="6"
                  sm="12"
                >
                  {{ branch.name }}<br>
                  {{ branch.price }} €<br>
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
  <v-card
    v-else
    tile
  >
    <v-card-text>
      <v-skeleton-loader
        class="mx-auto"
        type="card"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import Permissions from '@/mixins/Permissions';
import {cloneDeep} from 'lodash';
import hasArrayDifferenz from '@/mixins/HasArrayDifferenz';

export default {
  mixins: [Permissions, hasArrayDifferenz],
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      member: {
        id: null,
        fullName: null,
        firstName: null,
        lastName: null,
        email: null,
        isActive: false,
      },
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
  created() {
    this.getMember();
  },
  methods: {
    getMember() {
      this.isLoading = true;
      window.axios
          .get(`members/${this.userId}`)
          .then((response) => {
            this.member = response.data.data;
          })
          .finally(() => (this.isLoading = false));
    },
    accept() {
      this.isLoading = true;
      window.axios
          .put(`members/accept/${this.member.id}`)
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
          .put(`members/reject/${this.member.id}`)
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
