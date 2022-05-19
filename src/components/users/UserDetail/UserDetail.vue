<template>
  <v-card
    v-if="user.id"
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
            <v-card-text class="title text-left">
              <v-row>
                <v-col
                  cols="12"
                  lg="6"
                  md="6"
                  sm="12"
                >
                  <ProfileImg
                    v-if="user.image && user.image.image"
                    :src="user.image.image"
                  />
                </v-col>
                <v-col
                  cols="12"
                  lg="6"
                  md="6"
                  sm="12"
                >
                  {{ user.fullName }}<br>
                  {{ user.street }}<br>
                  {{ user.city }}<br>
                  {{ user.country.name }}<br><br>

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

                  {{ user.phone }}<br><br>

                  {{ user.birthday | date }}<br>
                  {{ user.age }} Jahre alt<br> <br>

                  Möchte E-Mail Benachrichtigungen: {{ user.wantsEmailNotification ? 'Ja' : 'Nein' }}<br>
                  Erstellt am: {{ user.createdAt | dateTime }} <br>
                  Bearbeitet am: {{ user.updatedAt | dateTime }} <br>
                  Aktiviert am: {{ user.activatedAt | dateTime }} <br>
                  E-mail bestätigt am: {{ user.emailVerifiedAt | dateTime }} <br>
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
          <v-row>
            <v-col
              cols="12"
            >
              <v-card>
                <v-card-title>
                  Bankdaten
                </v-card-title>
                <v-card-text class="title text-left">
                  <v-row>
                    <v-col
                      cols="12"
                      lg="6"
                      md="6"
                      sm="12"
                    >
                      {{ user.bankAccount.fullName }}<br>
                      {{ user.bankAccount.street }}<br>
                      {{ user.bankAccount.city }}<br>
                      {{ user.bankAccount.country.name }}<br><br>
                      Konto: <br>
                      {{ user.bankAccount.iban | VMask('FF## #### #### #### #### ##') }}<br>
                      {{ user.bankAccount.bic }} <br> <br>

                      Erstellt am: {{ user.bankAccount.createdAt | dateTime }} <br>
                      Bearbeitet am: {{ user.bankAccount.updatedAt | dateTime }} <br>
                    </v-col>
                    <v-col
                      cols="12"
                      lg="6"
                      md="6"
                      sm="12"
                    >
                      <SignatureContainer>
                        <Signature
                          v-if="user.bankAccount.signature && user.bankAccount.signature.image"
                          :src="user.bankAccount.signature.image"
                        />
                        {{ user.bankAccount.signatureCity }}
                      </SignatureContainer>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col
              cols="12"
            >
              <v-card>
                <v-card-title>
                  Sparten
                </v-card-title>
                <v-card-text class="title text-left">
                  <v-row>
                    <v-col
                      v-for="branchUserMemberShip in user.branchUserMemberShips"
                      :key="branchUserMemberShip.id"
                      cols="12"
                      lg="6"
                      md="6"
                      sm="12"
                    >
                      <v-card>
                        <v-card-title>
                          {{ branchUserMemberShip.branch.name }}
                        </v-card-title>
                        <v-card-text>
                          <div class="title">
                            Status: <branch-user-member-ship-state :branch-user-member-ship="branchUserMemberShip" />  <br>
                          </div>
                          Erstellt am: {{ branchUserMemberShip.createdAt | dateTime }} <br>
                          Bearbeitet am: {{ branchUserMemberShip.updatedAt | dateTime }} <br>
                          Exportiert zu Sepa: {{ branchUserMemberShip.exportedAt | date }} <br>
                          Sepa Datum: {{ branchUserMemberShip.sepaDate | date }} <br>
                          Möchte die Sparte Verlassen: {{ branchUserMemberShip.watsToLeaveAt | dateTime }} <br>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider />
    <actions
      :user="user"
      @close="close"
    />
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
import {Signature, SignatureContainer} from '@/styled-components/Signature';
import {ProfileImg} from '@/styled-components/ProfileImg';
import BranchUserMemberShipState from '@/components/users/UserDetail/parts/BranchUserMemberShipState';
import Actions from '@/components/users/UserDetail/parts/Actions';

export default {
  components: {Signature, SignatureContainer, ProfileImg, BranchUserMemberShipState, Actions},
  mixins: [Permissions],
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      user: {
        id: null
      },
      isLoading: false
    };
  },
  computed: {
    getIcon() {
      return this.user.emailVerifiedAt ? 'fa-check' : 'fa-times';
    },
    getTooltip() {
      return this.user.emailVerifiedAt ? 'E-Mail wurde bestätigt' : 'E-Mail wurde nicht bestätigt';
    }
  },
  watch: {
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.isLoading = true;
      window.axios
          .get(`users/${this.userId}`)
          .then((response) => {
            this.user = cloneDeep(response.data.data);
          })
          .finally(() => (this.isLoading = false));
    },
    close() {
      this.$emit('close');
    }
  }
};
</script>