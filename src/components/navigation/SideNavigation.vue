<template>

    <v-navigation-drawer
            v-model="sideNavigation"
            absolute
    >
        <v-list-item>
            <v-list-item-avatar>
                <v-img src="src/assets/background.jpeg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>Navigation</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item
                    link
                    @click="$router.push({name: 'home'})"
            >
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item
                    v-if="isAuth"
                    link
                    @click="$router.push({name: 'dashboard'})"
            >
                <v-list-item-icon>
                    <v-icon>mdi-bulletin-board</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {
        props: {
            sideNavigation: {
                type: Boolean,
                required: true
            }
        },
        computed: {
            ...mapGetters('auth', ['user']),
            ...mapGetters('auth', ['isAuth']),
        }
    }
</script>