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

            <v-btn
                    v-if="isAuth"
                    class="mx-4"
                    dark
                    icon
                    @click="$emit('user-navigation-changed')"
            >
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';

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
            goToLogin() {
                this.$router.push({name: 'login'})
            },
        }
    };
</script>
<style scoped>
    .header-logo {
        height: 75px;
    }
</style>
