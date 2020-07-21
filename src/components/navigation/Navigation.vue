<template>
    <div>
        <v-app-bar
                color="primary"
                dense
                dark
        >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>{{ appName }}</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
                   v-if="!isAuth"
                    class="mx-4"
                    dark
                    icon
                    @click="goToLogin"
            >
                <v-icon>mdi-login</v-icon>
            </v-btn>

            <v-menu
                    v-if="isAuth"
                    left
                    bottom
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                            icon
                            v-bind="attrs"
                            v-on="on"
                    >
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                            @click="logout()"
                    >
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                    <v-list-item
                            @click="goToMyAccount()"
                    >
                        <v-list-item-title>Mein Account</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        data() {
            return {
                appName: process.env.VUE_APP_NAME,
                extended: false
            };
        },
        computed: {
            ...mapGetters('auth', ['isAuth']),
        },
        methods: {
            ...mapActions('auth', ['logout']),
            goToLogin() {
                this.$router.push({name: 'login'})
            },
            goToMyAccount() {
                this.$router.push({name: 'dasboard'})
            }
        }
    };
</script>
<style scoped>
    .header-logo {
        height: 75px;
    }
</style>
