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
      <v-text-field
          v-model="user.email"
          label="Email"
          :error="hasErrors('email')"
          :error-messages="getErrors('email')"
      />
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

export default {
  components: {
    LevelSelect,
    UserPasswordForm,
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
        levelId: null
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
