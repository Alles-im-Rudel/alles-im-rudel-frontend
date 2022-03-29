<template>
  <v-row v-bind:class="{'pr-3': hasPadding, ' pl-3': hasPadding}">
    <v-col cols="12" md="6">
      <v-text-field
          v-model="user.password"
          :append-icon="showIcon ? 'fa-eye' : 'fa-eye-slash'"
          :type="showIcon ? 'text' : 'password'"
          :label="labels.first"
          counter
          :error="hasErrors('password')"
          :error-messages="getErrors('password')"
          @click:append="showIcon = !showIcon"
      />
    </v-col>
    <v-col cols="12" md="6">
      <v-text-field
          v-model="user.passwordRepeat"
          :append-icon="showIcon ? 'fa-eye' : 'fa-eye-slash'"
          :type="showIcon ? 'text' : 'password'"
          :label="labels.second"
          counter
          :error="hasErrors('passwordRepeat')"
          :error-messages="getErrors('passwordRepeat')"
          @click:append="showIcon = !showIcon"
      />
    </v-col>
  </v-row>
</template>
<script>
import ValidationErrors from '@/mixins/ValidationErros'

export default {
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
        password: null,
        passwordRepeat: null,
        email: null,
        isActive: false,
        userGroups: []
      })
    },
    labels: {
      type: Object,
      default: () => ({
        first: 'Passwort',
        second: 'Passwort wiederholen'
      })
    },
    validationErrors: {
      type: Object,
      default: () => {
      }
    },
    hasPadding: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      user: this.value,
      errors: this.validationErrors,
      showIcon: false
    };
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
  }
};
</script>
