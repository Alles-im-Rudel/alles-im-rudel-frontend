<template>
  <div>
    <address-form
      v-model="user"
      :validation-errors="errors"
    />
    <v-row>
      <v-col
        cols="12"
        md="6"
        lg="2"
      >
        <date-picker
          v-model="user.birthday"
          label="Geburtsdatum"
          :max-date="maxDate"
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="2"
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
        cols="12"
        md="6"
        lg="2"
      >
        <v-text-field
          v-model="user.phone"
          label="Telefon"
          :error="hasErrors('phone')"
          :error-messages="getErrors('phone')"
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="3"
      >
        <v-switch
          v-model="user.wantsEmailNotification"
          :label="wantsEmailLabel"
          :error="hasErrors('wantsEmailNotification')"
          :error-messages="getErrors('wantsEmailNotification')"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-if="!isProfil"
        cols="12"
        md="6"
        lg="2"
      >
        <v-switch
          v-model="user.isActive"
          class="my-1"
          :label="activeLabel"
          :error="hasErrors('isActive')"
          :error-messages="getErrors('isActive')"
        />
      </v-col>
      <v-col
        v-if="!isProfil"
        cols="12"
        md="6"
        lg="3"
      >
        <level-select
          v-model="user.levelId"
          :validation-errors="errors"
        />
      </v-col>
    </v-row>
    <user-password-form
      v-model="user"
      :labels="passwordFormLabels"
      :validation-errors="errors"
      :has-padding="false"
    />
  </div>
</template>
<script>
import ValidationErrors from '@/mixins/ValidationErrors';
import UserPasswordForm from '@/components/users/UserPasswordForm';
import LevelSelect from '@/components/selects/LevelSelect';
import DatePicker from '@/components/picker/DatePicker';
import dayjs from 'dayjs';
import AddressForm from '@/components/Address/AddressForm';

export default {
  components: {
    LevelSelect,
    UserPasswordForm,
    DatePicker,
    AddressForm
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
      errors: this.validationErrors,
      maxDate: dayjs().format('YYYY-MM-DD')
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
  methods: {}
};
</script>
