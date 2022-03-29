<template>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
            v-model="username"
            required
            label="Benutzername"
            :prepend-inner-icon="checkUserIcon"
            :error="hasErrors('username')"
            :error-messages="getErrors('username')"
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
            v-model="email"
            required
            label="Email"
            :prepend-inner-icon="checkEmailIcon"
            :error="hasErrors('email')"
            :error-messages="getErrors('email')"
        />
      </v-col>
    </v-row>
    <user-password-form
        v-model="form"
        :validation-errors="errors"
        :has-padding="false"
    />
  </div>
</template>
<script>
import ValidationErrors from "@/mixins/ValidationErros";
import UserPasswordForm from "@/components/users/UserPasswordForm";

export default {
  mixins: [ValidationErrors],
  components: {
    UserPasswordForm
  },
  props: {
    value: {
      type: Object,
      default: () => ({
        branches: []
      })
    },
    validationErrors: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      form: {},
      errors: {},
      isLoading: false,
      username: "",
      email: "",
      isUsernameFree: false,
      isLoadingUsername: false,
      isLoadingEmail: false,
      isEmailFree: false,
    }
  },
  methods: {
    async checkUsername() {
      this.isLoadingUsername = true;
      try {
        let {data} = await window.axios.get(`/profils/check-username/${this.username}`)
        this.isUsernameFree = data[0];
        if (this.isUsernameFree && this.username) {
          this.form.username = this.username
        } else {
          this.form.username = null;
        }
      } catch (error) {
        this.errors = error;
        this.form.username = null;
      } finally {
        this.isLoadingUsername = false;
      }
    },
    async checkEmail() {
      this.isLoadingEmail = true;
      try {
        let {data} = await window.axios.get(`/profils/check-email/${this.email}`)
        this.isEmailFree = data[0];
        if (this.isEmailFree && this.email) {
          this.form.email = this.email
        } else {
          this.form.email = null;
        }
      } catch (error) {
        this.errors = error;
        this.form.email = null;
      } finally {
        this.isLoadingEmail = false;
      }
    }
  },
  computed: {
    checkUserIcon() {
      if (this.isLoadingUsername) {
        return "fa-loader";
      }
      return this.username && this.isUsernameFree ? "fa-check" : "fa-times";
    },
    checkEmailIcon() {
      if (this.isLoadingEmail) {
        return "fa-loader";
      }
      return this.email && this.isEmailFree ? "fa-check" : "fa-times";
    }
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.form = this.value;
      }
    },
    username: {
      handler() {
        setTimeout(() => {
          if (this.username) {
            this.checkUsername();
          } else {
            this.form.username = null;
          }
        }, 1000)
      }
    },
    email: {
      handler() {
        setTimeout(() => {
          if (this.email) {
            this.checkEmail();
          } else {
            this.form.email = null;
          }
        }, 1000)
      }
    },
    validationErrors: {
      handler() {
        this.errors = this.validationErrors;
      },
      deep: true
    },
    form: {
      deep: true,
      handler() {
        this.$emit('input', this.form);
      }
    }
  }
}
</script>