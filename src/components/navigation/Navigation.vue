<template>
    <section>
        <section v-if="isAuth">
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
        </section>

        <v-app-bar
                app
                height="100"
                extension-height="auto"
                fixed
                clipped-right
                absolute
        >
            <v-toolbar-title class="headline">
                <router-link to="/">
                    <picture>
                        <source
                                class="header-logo"
                                srcset="@/assets/logo.svg"
                                type="image/svg+xml"
                        />
                        <img
                                width="75"
                                class="header-logo"
                                src="@/assets/logo.png"
                                alt="company-image"
                        />
                    </picture>
                </router-link>
            </v-toolbar-title>
            <v-spacer />
            <section v-if="isAuth">
                <v-btn color="accent" fab text href="#" @click="extended = !extended">
                    <v-icon>fa-search</v-icon>
                </v-btn>
                <v-btn
                        color="accent"
                        fab
                        text
                        href="#"
                        @click.stop="SET_NAVIGATION_ITEM_DRAWER(!navigationItemDrawer)"
                >
                    <v-icon>fa-cog</v-icon>
                </v-btn>
            </section>
        </v-app-bar>
    </section>
</template>
<script>
    import {mapGetters, mapMutations} from 'vuex';
    import NavigationItemDrawer from '@/components/navigation/NavigationItemDrawer';

    export default {
        components: {
            'navigation-item-drawer': NavigationItemDrawer,
        },
        data() {
            return {
                appName: process.env.VUE_APP_NAME,
                extended: false
            };
        },
        computed: {
            ...mapGetters('navigation', [
                'navigationItemDrawer',
            ]),
            ...mapGetters('auth', ['isAuth']),
        },
        methods: {
            ...mapMutations('navigation', [
                'SET_NAVIGATION_ITEM_DRAWER'
            ])
        }
    };
</script>
<style scoped>
    .header-logo {
        height: 75px;
    }
</style>
