<template>
  <v-row>
    <v-col cols="12" md="6" lg="3">
      <v-text-field
          v-model="user.firstName"
          label="Vorname"
          :error="hasErrors('firstName')"
          :error-messages="getErrors('firstName')"
      />
    </v-col>
    <v-col cols="12" md="6" lg="3">
      <v-text-field
          v-model="user.lastName"
          label="Nachname"
          :error="hasErrors('lastName')"
          :error-messages="getErrors('lastName')"
      />
    </v-col>
    <v-col cols="12" md="6" lg="3">
      <v-text-field
          v-model="user.username"
          label="Benutzername"
          :error="hasErrors('username')"
          :error-messages="getErrors('username')"
      />
    </v-col>
    <v-col cols="12" md="6" lg="3">
      <v-switch
          v-model="user.wantsEmailNotification"
          :label="wantsEmailLabel"
          :error="hasErrors('wantsEmailNotification')"
          :error-messages="getErrors('wantsEmailNotification')"
      />
    </v-col>
    <v-col cols="12" md="6" lg="3">
      <v-text-field
          v-model="user.email"
          label="E-Mail"
          :error="hasErrors('email')"
          :error-messages="getErrors('email')"
      >
        <template slot="append">
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-icon v-if="!!user.emailVerifiedAt" v-on="on" color="success">fa-check</v-icon>
              <v-icon v-else v-on="on" color="error">fa-times</v-icon>
            </template>
            <span v-if="!!user.emailVerifiedAt">E-Mail verifiziert</span>
            <span v-else>E-Mail nicht verifiziert</span>
          </v-tooltip>
        </template>
      </v-text-field>
    </v-col>
    <v-col cols="12" md="6" lg="3">
      <date-picker v-model="user.birthday" label="Geburtsdatum" />
    </v-col>
    <v-col cols="12" md="6" lg="3" v-if="!isProfil">
      <level-select v-model="user.levelId" @input="updateLevel" />
    </v-col>
    <v-col cols="12" md="6" lg="9" v-if="!isProfil">
      <v-switch
          v-model="user.isActive"
          class="my-1"
          :label="activeLabel"
          :error="hasErrors('isActive')"
          :error-messages="getErrors('isActive')"
      />
    </v-col>
    <user-password-form
        v-model="user"
        :labels="passwordFormLabels"
        :validation-errors="errors"
    />
  </v-row>
</template>
<script>
import ValidationErrors from '@/mixins/ValidationErros';
import UserPasswordForm from '@/components/users/UserPasswordForm';
import LevelSelect from '@/components/selects/LevelSelect';
import DatePicker from '@/components/picker/DatePicker';

export default {
  components: {
    LevelSelect,
    UserPasswordForm,
    DatePicker
  },
  mixins: [ValidationErrors],
  props: {
    value: {
      type: Object,
      required: true,
      default: () => ({
        id: null,
        fullName: null,
        firstName: null,
        lastName: null,
        username: null,
        email: null,
        isActive: false,
        wantsEmailNotification: false,
        levelId: null,
        birthday: null
      })
    },
    passwordFormLabels: {
      type: Object,
      required: false,
      default: () => ({
        first: 'Passwort',
        second: 'Passwort wiederholen'
      })
    },
    validationErrors: {
      type: Object,
      default: () => ({})
    },
    isProfil: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      user: this.value,
      errors: this.validationErrors
    };
  },
  computed: {
    activeLabel() {
      return this.user.isActive ? 'Aktiver Benutzer' : 'Inaktiver Benutzer';
    },
    wantsEmailLabel() {
      return this.user.wantsEmailNotification ? 'E-Mail Benachrichtigungen' : 'keine E-Mail Benachrichtigungen';
    }
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.user = this.value;
      }
    },
    validationErrors: {
      handler() {
        this.errors = this.validationErrors;
      },
      deep: true
    },
    user: {
      deep: true,
      handler() {
        this.$emit('input', this.user);
      }
    }
  },
  methods: {
    updateLevel(data) {
      this.user.levelId = data;
    }
  }
};
</script>
