<template>
    <v-card tile min-height="100%" color="white">
        <section>
            <v-sheet color="primary" class="pa-6 headline" tile>
            </v-sheet>
            <v-card color="darkGrey" tile flat>
                <v-card-text v-if="isAuth" class="white--text">
                    Willkommen:
                    <br />
                    {{ user.username }}
                </v-card-text>
                <v-card-text v-if="!isAuth" class="white--text">
                    Willkommen
                </v-card-text>
            </v-card>
            <v-skeleton-loader type="paragraph" v-if="isAuth">
                <v-treeview
                        v-if="navigationItems"
                        :items="navigationItems"
                        :open.sync="open"
                        :transition="true"
                        activatable
                        open-on-click
                        item-text=""
                        item-key="id"
                        return-object
                        @update:active="onItemActive"
                >
                    <template v-slot:prepend="{ item, open }">
                        <span>
                          <v-icon v-if="!item.parent_id" left color="greyBlue">
                            {{ open ? 'fa-folder-open' : 'fa-folder' }}
                          </v-icon>
                          <v-icon v-else left color="greyBlue">
                            {{ item.icon }}
                          </v-icon>
                          {{ item.display_name }}
                        </span>
                    </template>
                </v-treeview>
            </v-skeleton-loader>
            <div class="ma-3" v-if="isAuth">
                <v-btn block color="greyBlue white--text" @click="confirmLogout">
                    <v-icon small left>fa-power-off</v-icon>
                    Logout
                </v-btn>
            </div>
            <div class="ma-3" v-if="!isAuth">
                <v-btn block color="greyBlue white--text" @click="goToLogin">
                    <v-icon small left>mdi-login</v-icon>
                    Login
                </v-btn>
            </div>
        </section>
    </v-card>
</template>
<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        data() {
            return {
                open: [],
                openFree: [],
                isLoading: false,
            };
        },
        computed: mapGetters('auth', ['navigationItems', 'user', 'isAuth']),
        methods: {
            ...mapActions('auth', ['logout']),
            onSettingsDrawerClose() {
                this.$store.commit('navigation/SET_NAVIGATION_ITEM_DRAWER', false);
            },
            onItemActive(item) {
                if (item && item.length > 0 && item[0].route_name !== this.$route.name) {
                    this.$router.push({name: item[0].route_name});
                }
            },
            confirmLogout() {
                this.$root.$confirm
                    .open(
                        'Logout',
                        'Möchten Sie sich wirklich Ausloggen?',
                        'greyBlue'
                    )
                    .then(confirm => confirm && this.logout());
            },
            goToLogin() {
                this.$router.push({name: 'login'})
            },
        }
    };
</script>
<style scoped></style>
