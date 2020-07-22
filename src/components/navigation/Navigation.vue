<template>
    <section>
        <v-navigation-drawer
            :value="navigationItemDrawer"
            app
            temporary
            right
            width="400"
            @input="SET_NAVIGATION_ITEM_DRAWER($event)"
        >
            <navigation-item-drawer />
        </v-navigation-drawer>
        <v-app-bar
                app
                color="primary"
                dense
                fixed
                elevate-on-scroll
                absolute
        >
            <v-container fluid>
                <v-row>
                    <!--<v-col align-self="center" class="text-center">
                        <router-link to="/">
                            <img
                                    class="header-logo"
                                    src="@/assets/logo_light.png"
                                    alt="company-image"
                            />
                        </router-link>
                    </v-col>-->
                    <v-col align-self="center" class="text-right">
                            <v-btn
                                    color="white"
                                    fab
                                    text
                                    href="#"
                                    @click.stop="SET_NAVIGATION_ITEM_DRAWER(!navigationItemDrawer)"
                            >
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                    </v-col>
                </v-row>
            </v-container>
            <v-spacer />
            <!--<v-app-bar-nav-icon @click="$emit('side-navigation-changed')"></v-app-bar-nav-icon>
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
            </v-btn>-->
        </v-app-bar>
    </section>
</template>
<script>
    import {mapGetters, mapMutations} from 'vuex';
    import NavigationItemDrawer from "./NavigationItemDrawer";

    export default {
        components:{
          'navigation-item-drawer': NavigationItemDrawer
        },
        data() {
            return {
                appName: process.env.VUE_APP_NAME,
                extended: false
            };
        },
        computed: {
            ...mapGetters('auth', ['isAuth']),
            ...mapGetters('navigation', ['navigationItemDrawer'])
        },
        methods: {
            goToLogin() {
                this.$router.push({name: 'login'})
            },
            ...mapMutations('navigation', ['SET_NAVIGATION_ITEM_DRAWER'])
        }
    };
</script>
<style scoped>
    .header-logo {
        height: 75px;
    }
</style>
