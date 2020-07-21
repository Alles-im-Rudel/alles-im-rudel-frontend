<template>

    <v-navigation-drawer
            v-model="userNavigation"
            absolute
            right
    >
        <v-list-item>
            <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>{{ user.first_name }} {{ user.last_name }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item
                    link
                    @click="goToUserProfil"
            >
                <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Mein Profil</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item
                    link
                    @click="logout"
            >
                <v-list-item-icon>
                    <v-icon>mdi-logout</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Logout</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        props: {
            userNavigation: {
                type: Boolean,
                required: true
            }
        },
        computed: {
            ...mapGetters('auth', ['user']),
        },
        data() {
            return {
                items: [
                    {title: 'Profil', icon: 'mdi-account', action: 'user'},
                    {title: 'Logout', icon: 'mdi-logout', action: 'logout'},
                ],
            }
        },
        methods: {
            ...mapActions('auth', ['logout']),
            goToUserProfil() {
                this.$router.push({name: 'dashbaord'})
            }
        }
    }
</script>