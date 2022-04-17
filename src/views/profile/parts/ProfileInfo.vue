<template>
  <v-form
    class="profile-info"
    @submit.prevent="submit"
  >
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <SalutationSelect
          v-model="user.salutation"
          :validation-errors="errors"
          :hide-details="!hasErrors('salutation')"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="user.firstName"
          label="Vorname"
          :error="hasErrors('firstName')"
          :error-messages="getErrors('firstName')"
          :hide-details="!hasErrors('firstName')"
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="user.lastName"
          label="Nachname"
          :error="hasErrors('lastName')"
          :error-messages="getErrors('lastName')"
          :hide-details="!hasErrors('lastName')"
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="user.phone"
          label="Telefon"
          :error="hasErrors('phone')"
          :error-messages="getErrors('phone')"
          :hide-details="!hasErrors('phone')"
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="user.email"
          required
          label="E-Mail"
          :error="hasErrors('email')"
          :error-messages="getErrors('email')"
          :hide-details="!hasErrors('email')"
        >
          <template #append>
            <v-icon
              v-if="user"
              :class="user.emailVerifiedAt ? 'success--text' : 'error--text'"
            >
              {{ user.emailVerifiedAt ? 'fa-check' : 'fa-times' }}
            </v-icon>
          </template>
        </v-text-field>
      </v-col>
      <user-password-form
        v-model="user"
        :validation-errors="errors"
      />
      <v-col
        cols="12"
        class="d-flex justify-end"
      >
        <v-btn
          color="greyBlue"
          type="submit"
          :disabled="!canSubmit"
          :loading="isLoading"
          :dark="isLoading"
        >
          <span :class="canSubmit ? 'white--text' : 'grey--text'">
            Speichern
          </span>
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import SalutationSelect from '@/components/selects/SalutationSelect';
import ValidationErrors from '@/mixins/ValidationErrors';
import UserPasswordForm from '@/components/users/UserPasswordForm';
import {cloneDeep} from 'lodash';

export default {
  components: {SalutationSelect, UserPasswordForm},
  mixins: [ValidationErrors],
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isLoading: false,
      user: this.value,
      originalUser: cloneDeep(this.value)
    };
  },
  computed: {
    canSubmit() {
      return (
        (
          (!this.user.password && !this.user.passwordRepeat)
          || (this.user.password === this.user.passwordRepeat)
        ) &&
        this.user.firstName &&
        this.user.lastName &&
        this.user.phone &&
        this.user.salutation &&
        this.user.email &&
        this.hasChanges
      );
    },
    hasChanges() {
      return (
        this.user.firstName !== this.originalUser.firstName ||
        this.user.lastName !== this.originalUser.lastName ||
        this.user.salutation !== this.originalUser.salutation ||
        this.user.phone !== this.originalUser.phone ||
        this.user.email !== this.originalUser.email ||
        !!this.user.password
      );
    }
  },
  watch: {
    value: {
      handler(value) {
        this.user = value;
      },
      deep: true
    },
    user: {
      handler(value) {
        this.$emit('input', value);
      },
      deep: true
    }
  },
  methods: {
    submit() {
      this.isLoading = true;
      this.errors = {};

      let params = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        salutation: this.user.salutation,
        phone: this.user.phone,
        email: this.user.email,
      };

      if (this.user.password && this.user.passwordRepeat) {
        params.password = this.user.password;
        params.passwordRepeat = this.user.passwordRepeat;
      }

      window.axios
        .put('profile', params)
        .then((response) => {
          this.$root.$snackbar.open(response.data.message);
          this.originalUser = cloneDeep(this.user);
        })
        .catch(this.syncErrors)
        .finally(() => (this.isLoading = false));
    },
  }
};
</script>