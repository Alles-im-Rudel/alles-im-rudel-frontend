<template>
  <BaseCard>
    <v-card-title class="headline">
      {{ user.fullName }}
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-row>
        <v-col
          cols="12"
          md="6"
          lg="3"
        >
          <v-text-field
            v-model="user.email"
            label="E-Mail"
            :error="hasErrors('email')"
            :error-messages="getErrors('email')"
          >
            <template slot="append">
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-icon
                    v-if="!!user.emailVerifiedAt"
                    color="success"
                    v-on="on"
                  >
                    fa-check
                  </v-icon>
                  <v-icon
                    v-else
                    color="error"
                    v-on="on"
                  >
                    fa-times
                  </v-icon>
                </template>
                <span v-if="!!user.emailVerifiedAt">E-Mail verifiziert</span>
                <span v-else>E-Mail nicht verifiziert</span>
              </v-tooltip>
            </template>
          </v-text-field>
        </v-col>
        <v-col
          v-if="user.memberShip"
          cols="12"
          md="6"
          lg="3"
        >
          <v-text-field
            v-model="user.memberShip.phone"
            label="E-Mail"
            :error="hasErrors('phone')"
            :error-messages="getErrors('phone')"
          />
        </v-col>
      </v-row>
      <user-password-form
        v-model="user"
        :labels="passwordFormLabels"
        :validation-errors="errors"
        :has-padding="false"
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
import ValidationErrors from '@/mixins/ValidationErros';
import ResetSaveAction from '@/components/cardActions/ResetSaveAction';
import UserPasswordForm from '@/components/users/UserPasswordForm';

export default {
  components: {
    ResetSaveAction,
    UserPasswordForm
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
          this.user.email !== this.originalUser.email ||
          this.user.memberShip && this.user.memberShip.phone !== this.originalUser.memberShip.phone ||
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
