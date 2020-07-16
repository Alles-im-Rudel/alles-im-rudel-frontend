<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" md="5">
                <v-card>
                    <v-card-title>Login</v-card-title>
                    <v-card-text>
                        <form>
                            <v-text-field
                                    v-model="form.email"
                                    required
                                    label="Benutzername"
                            />
                            <v-text-field
                                    v-model="form.password"
                                    required
                                    label="Passwort"
                            />
                        </form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="submit">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapActions} from 'vuex';
    import ValidationErrors from '../mixins/ValidationErros'

    export default {
        mixins: [ValidationErrors],
        data() {
            return {
                form: {
                    email: null,
                    password: null,
                },
                isLoading: false,
                errorMessage: null,
                errors: {},
            }
        },
        methods: {
            ...mapActions('auth', ['login']),
            submit() {
                this.clearErrors();
                this.login(this.form)
                    .then(response => {
                        this.$root.$snackbar.open(response.data.message);
                        this.$router.push({name: 'dashboard'});
                    })
                    .catch(error => {
                        this.syncErrors(error);
                        if (error.response.data.message) {
                            this.errorMessage = error.response.data.message;
                        }
                    })
                    .finally(() => (this.isLoading = false));
            }
        }
    }
</script>