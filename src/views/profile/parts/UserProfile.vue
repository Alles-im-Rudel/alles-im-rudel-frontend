<template>
  <base-card v-if="!user.id">
    <v-card-title>
      Lädt dein Profil
    </v-card-title>
    <v-card-text>
      <v-skeleton-loader class="mx-auto" type="card" />
    </v-card-text>
  </base-card>
  <base-card v-else>
    <v-card-title class="headline">
      {{ user.fullName }}
    </v-card-title>
    <v-divider />
    <v-card-text>
      <user-form
          v-model="user"
          :password-form-labels="passwordFormLabels"
          :validation-errors="errors"
      />
    </v-card-text>
    <v-divider />
    <reset-save-action
        :is-loading="isLoading"
        :can-submit="canSubmit"
        :has-changes="hasChanges"
        @submit="submit"
        @clear="clear"
    />
  </base-card>
</template>
<script>
import {cloneDeep} from 'lodash';
import UserForm from '@/components/users/UserForm';
import ValidationErrors from '@/mixins/ValidationErros'
import ResetSaveAction from '@/components/cardActions/ResetSaveAction';

export default {
  components: {
    ResetSaveAction,
    UserForm
  },
  mixins: [ValidationErrors],
  data() {
    return {
      user: {
        id: null,
        salutation: null,
        fullName: null,
        firstName: null,
        lastName: null,
        username: null,
        email: null,
        isActive: null,
        levelId: null
      },
      originalUser: {
        id: null,
        salutation: null,
        fullName: null,
        firstName: null,
        lastName: null,
        username: null,
        email: null,
        isActive: null,
        levelId: null
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
          this.user.username &&
          this.user.levelId &&
          (((this.user.password === undefined ||
              this.user.password.length === 0) &&
              (this.user.passwordRepeat === undefined ||
                  this.user.passwordRepeat.length === 0)) ||
              this.user.password === this.user.passwordRepeat) &&
          this.hasChanges
      );
    },
    hasChanges() {
      return (
          this.user.lastName !== this.originalUser.lastName ||
          this.user.firstName !== this.originalUser.firstName ||
          this.user.username !== this.originalUser.username ||
          this.user.email !== this.originalUser.email ||
          this.user.isActive !== this.originalUser.isActive ||
          this.user.salutation !== this.originalUser.salutation ||
          this.user.levelId !== this.originalUser.levelId ||
          !!this.user.password ||
          !!this.user.passwordRepeat
      );
    }
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.isLoading = true;
      window.axios
          .get(`profile`)
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
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        username: this.user.username,
        email: this.user.email,
        isActive: this.user.isActive,
        levelId: this.user.levelId
      };

      if (this.user.password && this.user.passwordRepeat) {
        params.password = this.user.password;
        params.passwordRepeat = this.user.passwordRepeat;
      }

      window.axios
          .put(`profile`, params)
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
