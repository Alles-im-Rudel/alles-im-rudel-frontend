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
                  <div>
                    {{ user.fullName }}<br>
                    {{ user.street }}<br>
                    {{ user.city }}<br>
                    {{ user.country.name }}<br>
                  </div>
                  <br>
                  <div>
                    {{ user.birthday | date }}<br>
                    {{ user.age }} Jahre alt<br>
                  </div>
                  <br>
                  <div>
                    {{ user.phone }}
                  </div>
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
                  <br>
                  <div>
                    Möchte E-Mail Benachrichtigungen: {{ user.wantsEmailNotification ? 'Ja' : 'Nein' }}<br>
                    E-Mail bestätigt am: {{ user.emailVerifiedAt | dateTime }}<br>
                  </div>
                  <br>
                  <div>
                    Erstellt am: {{ user.createdAt | dateTime }}<br>
                    Aktiviert am: {{ user.activatedAt | dateTime }}<br>
                    Zuletzt bearbeitet: {{ user.updatedAt | dateTime }}<br>
                  </div>
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
                      <div>
                        {{ user.bankAccount.fullName }}<br>
                        {{ user.bankAccount.street }}<br>
                        {{ user.bankAccount.city }}<br>
                        {{ user.bankAccount.country.name }}<br>
                      </div>
                      <br>
                      <div>
                        {{ user.bankAccount.iban | VMask('FF## #### #### #### #### ##') }}<br>
                        {{ user.bankAccount.bic }} <br>
                      </div>
                      <br>
                      <div>
                        Erstellt am: {{ user.bankAccount.createdAt | dateTime }}<br>
                        Zuletzt bearbeitet: {{ user.bankAccount.updatedAt | dateTime }}<br>
                      </div>
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
                        {{ user.bankAccount.signatureCity }},
                        {{ user.bankAccount.createdAt | date }}
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
                            Status: <branch-user-member-ship-state :branch-user-member-ship="branchUserMemberShip" />
                          </div>
                          <br>
                          <div>
                            Zugehörig seit: {{ branchUserMemberShip.createdAt | dateTime }}<br>
                            Zuletzt bearbeitet: {{ branchUserMemberShip.updatedAt | dateTime }}<br>
                            Erste Zahlung: {{ branchUserMemberShip.exportedAt | date }}<br>
                            Nächste Zahlung: {{ branchUserMemberShip.sepaDate | date }}<br>
                            Möchte die Sparte verlassen: {{ branchUserMemberShip.wantsToLeaveAt | dateTime }}<br>
                          </div>
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