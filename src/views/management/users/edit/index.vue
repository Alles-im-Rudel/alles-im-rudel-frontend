<template>
  <div>
    <BaseBackground />
    <v-container>
      <BaseCard v-if="!user.id">
        <v-card-title>
          Lädt den Benutzer
        </v-card-title>
        <v-card-text>
          <v-skeleton-loader
            class="mx-auto"
            type="card"
          />
        </v-card-text>
      </BaseCard>
      <BaseCard v-else>
        <v-card-title class="headline">
          Bearbeiten von: {{ user.fullName }}
          <v-spacer />
          <v-btn @click="pushRouteTo('management-users')">
            <v-icon class="mr-1">
              fa-arrow-left
            </v-icon>
            Zurück zur Benutzerübersicht
          </v-btn>
        </v-card-title>
        <v-divider />
        <v-card-title>
          Benutzerdaten
        </v-card-title>
        <v-card-text>
          <user-form
            v-model="user"
            :password-form-labels="passwordFormLabels"
            :validation-errors="errors"
          />
        </v-card-text>
        <v-card-title>
          Bankdaten
        </v-card-title>
        <v-card-text>
          <bank-account-form
            v-model="user.bankAccount"
            :validation-errors="errors"
          />
        </v-card-text>
        <v-divider />
        <reset-save-action
          :is-loading="isLoading"
          :can-submit="canSubmit"
          :has-changes="(hasUserChanges || hasBankAccountChanges)"
          @submit="submit"
          @clear="clear"
        />
      </BaseCard>
    </v-container>
  </div>
</template>
<script>
import {cloneDeep} from 'lodash';
import UserForm from '@/components/users/UserForm';
import ValidationErrors from '@/mixins/ValidationErrors';
import ResetSaveAction from '@/components/cardActions/ResetSaveAction';
import BankAccountForm from '@/components/bankAccount/BankAccountForm';

export default {
  components: {
    BankAccountForm,
    ResetSaveAction,
    UserForm
  },
  mixins: [ValidationErrors],
  props: {
    userId: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      user: {
        id: null,
        salutation: null,
        fullName: null,
        firstName: null,
        lastName: null,
        email: null,
        isActive: null,
        levelId: null,
        birthday: null,
        bankAccount: {
          id: null
        }
      },
      originalUser: {
        id: null,
        salutation: null,
        fullName: null,
        firstName: null,
        lastName: null,
        email: null,
        isActive: null,
        levelId: null,
        birthday: null,
        bankAccount: {
          id: null
        }
      },
      passwordFormLabels: {
        first: 'Passwort ändern',
        second: 'Passwort bestätigen'
      },
      isLoading: false,
      errors: {}
    };
  },
  computed: {
    canSubmit() {
      return (
          this.user.lastName &&
          this.user.firstName &&
          this.user.levelId &&
          (((this.user.password === undefined ||
                      this.user.password.length === 0) &&
                  (this.user.passwordRepeat === undefined ||
                      this.user.passwordRepeat.length === 0)) ||
              this.user.password === this.user.passwordRepeat) &&
          (this.hasUserChanges || this.hasBankAccountChanges)
      );
    },
    hasUserChanges() {
      return (
          this.user.salutation !== this.originalUser.salutation ||
          this.user.firstName !== this.originalUser.firstName ||
          this.user.lastName !== this.originalUser.lastName ||
          this.user.street !== this.originalUser.street ||
          this.user.postcode !== this.originalUser.postcode ||
          this.user.city !== this.originalUser.city ||
          this.user.country.name !== this.originalUser.country.name ||
          this.user.birthday !== this.originalUser.birthday ||
          this.user.email !== this.originalUser.email ||
          this.user.phone !== this.originalUser.phone ||
          this.user.wantsEmailNotification !== this.originalUser.wantsEmailNotification ||
          this.user.isActive !== this.originalUser.isActive ||
          this.user.levelId !== this.originalUser.levelId ||
          !!this.user.password ||
          !!this.user.passwordRepeat
      );
    },
    hasBankAccountChanges() {
      return (
          this.user.bankAccount.bic !== this.originalUser.bankAccount.bic ||
          this.user.bankAccount.iban !== this.originalUser.bankAccount.iban ||
          this.user.bankAccount.iban !== this.originalUser.bankAccount.iban ||
          this.user.bankAccount.firstName !== this.originalUser.bankAccount.firstName ||
          this.user.bankAccount.lastName !== this.originalUser.bankAccount.lastName ||
          this.user.bankAccount.street !== this.originalUser.bankAccount.street ||
          this.user.bankAccount.postcode !== this.originalUser.bankAccount.postcode ||
          this.user.bankAccount.city !== this.originalUser.bankAccount.city ||
          this.user.bankAccount.country.name !== this.originalUser.bankAccount.country.name
      );
    }
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.isLoading = true;
      const params = {
        userId: this.userId
      };
      window.axios
          .get(`users/${this.userId}`, {params})
          .then((response) => {
            this.user = cloneDeep(response.data.data);
            this.originalUser = cloneDeep(response.data.data);
          })
          .finally(() => (this.isLoading = false));
    },
    submit() {
      this.isLoading = true;
      this.errors = {};
      let params = {
        userId: this.user.id,
        salutation: this.user.salutation,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        street: this.user.street,
        postcode: this.user.postcode,
        city: this.user.city,
        country: this.user.country.name,
        birthday: this.user.birthday,
        email: this.user.email,
        phone: this.user.phone,
        wantsEmailNotification: this.user.wantsEmailNotification,
        isActive: this.user.isActive,
        levelId: this.user.levelId,

        bankAccountBic: this.user.bankAccount.bic,
        bankAccountIban: this.user.bankAccount.iban,
        bankAccountFirstName: this.user.bankAccount.firstName,
        bankAccountLastName: this.user.bankAccount.lastName,
        bankAccountStreet: this.user.bankAccount.street,
        bankAccountPostcode: this.user.bankAccount.postcode,
        bankAccountCity: this.user.bankAccount.city,
        bankAccountCountry: this.user.bankAccount.country.name,

      };

      if (this.user.password && this.user.passwordRepeat) {
        params.password = this.user.password;
        params.passwordRepeat = this.user.passwordRepeat;
      }

      window.axios
          .put(`users/${this.userId}`, params)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
            this.user = cloneDeep(response.data.user);
            this.originalUser = cloneDeep(response.data.user);
          })
          .catch(this.syncErrors)
          .finally(() => (this.isLoading = false));
    },
    clear() {
      this.user = cloneDeep(this.originalUser);
      this.errors = {};
    }
  }
};
</script>
