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
                    <v-col align-self="center" class="text-left white--text">
                        <router-link class="text-left white--text no-underline" :to="{ name: 'home'}">Alles Im Rudel</router-link>
                        <router-link class="text-left white--text no-underline pl-10" :to="{ name: 'airsoft'}"><v-icon class="white--text">fa-tree</v-icon> Airsoft</router-link>
                        <router-link class="text-left white--text no-underline pl-5" :to="{ name: 'gaming'}"><v-icon class="white--text">fa-desktop</v-icon> Gaming</router-link>
                    </v-col>
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
                            <v-icon>fa-bars</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>
    </section>
</template>
<script>
    import {mapGetters, mapMutations} from 'vuex';
    import NavigationItemDrawer from "./NavigationItemDrawer";

    export default {
        components: {
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
            ...mapMutations('navigation', ['SET_NAVIGATION_ITEM_DRAWER'])
        }
    };
</script>
<style scoped>
    .header-logo {
        height: 75px;
    }
    .no-underline {
        text-decoration: none;
    }
</style>
