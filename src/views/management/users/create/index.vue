<template>
  <v-container>
    <BaseCard>
      <v-card-title class="headline">
        Benutzer erstellen
        <v-spacer />
        <v-btn @click="back">
          <v-icon class="mr-1">
            fa-arrow-left
          </v-icon>
          Zurück zur Benutzerübersicht
        </v-btn>
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
        @submit="submit"
        @clear="clear"
      />
    </BaseCard>
  </v-container>
</template>
<script>
import UserForm from '@/components/users/UserForm';
import ValidationErrors from '@/mixins/ValidationErros';
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
        salutation: null,
        fullName: null,
        firstName: null,
        lastName: null,
        username: null,
        email: null,
        isActive: false,
        levelId: null,
        birthday: null,
        password: null,
        passwordRepeat: null,
        wantsEmailNotification: false
      },
      passwordFormLabels: {
        first: 'Passwort',
        second: 'Passwort bestätigen'
      },
      isLoading: false,
      errors: {}
    };
  },
  computed: {
    canSubmit() {
      return (
        !!this.user.lastName &&
        !!this.user.firstName &&
        !!this.user.username &&
        !!this.user.levelId &&
        !!this.user.email &&
        !!this.user.password &&
        !!this.user.passwordRepeat &&
        this.user.password === this.user.passwordRepeat
      );
    }
  },
  methods: {
    back() {
      this.pushRouteTo('management-users');
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
        levelId: this.user.levelId,
        birthday: this.user.birthday,
        password: this.user.password,
        wantsEmailNotification: this.user.wantsEmailNotification
      };

      window.axios
        .post('users', params)
        .then((response) => {
          this.$root.$snackbar.open(response.data.message);
          this.back();
          this.clear();
        })
        .catch(this.syncErrors)
        .finally(() => (this.isLoading = false));
    },
    clear() {
      this.user = {
        salutation: null,
        fullName: null,
        firstName: null,
        lastName: null,
        username: null,
        email: null,
        isActive: false,
        levelId: null,
        birthday: null,
        password: null,
        passwordRepeat: null,
        wantsEmailNotification: false
      };
      this.errors = {};
    }
  }
};
</script>
