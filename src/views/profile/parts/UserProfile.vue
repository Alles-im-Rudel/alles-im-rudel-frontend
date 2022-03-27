<template>
  <BaseCard>
    <v-card-title class="headline">
      {{ user.fullName }}
    </v-card-title>
    <v-divider />
    <v-card-text>
      <user-form
        v-model="user"
        is-profil
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
  </BaseCard>
</template>
<script>
import {cloneDeep} from 'lodash';
import UserForm from '@/components/users/UserForm';
import ValidationErrors from '@/mixins/ValidationErros';
import ResetSaveAction from '@/components/cardActions/ResetSaveAction';

export default {
  components: {
    ResetSaveAction,
    UserForm
  },
  mixins: [ValidationErrors],
  props: {
    originalUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      user: cloneDeep(this.originalUser),
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
          this.user.birthday !== this.originalUser.birthday ||
          this.user.wantsEmailNotification !== this.originalUser.wantsEmailNotification ||
          !!this.user.password ||
          !!this.user.passwordRepeat
      );
    }
  },
  watch: {
    originalUser: {
      deep: true,
      handler(value) {
        this.user = cloneDeep(value);
      }
    },
  },
  methods: {
    submit() {
      this.isLoading = true;
      this.errors = {};
      let params = {
        userId: this.user.id,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        username: this.user.username,
        email: this.user.email,
        wantsEmailNotification: this.user.wantsEmailNotification,
        birthday: this.user.birthday
      };

      if (this.user.password && this.user.passwordRepeat) {
        params.password = this.user.password;
        params.passwordRepeat = this.user.passwordRepeat;
      }

      window.axios
          .put('profile', params)
          .then((response) => {
            this.$root.$snackbar.open(response.data.message);
            this.$emit('updated');
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
