<template>
    <v-card tile min-height="100%" color="white">
        <section>
            <v-sheet color="secondary" class="pa-4 headline" tile>
                <v-row no-gutters>
                    <v-col cols="11">
                        <p class="title">Hauptmenü</p>
                    </v-col>
                    <v-col cols="1">
                        <v-btn icon @click.prevent="onSettingsDrawerClose">
                            <v-icon color="accent">mdi-dots-vertical</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-sheet>
            <v-card color="primary" tile flat>
                <v-card-text v-if="isAuth">
                    <span>
                      <v-icon small left>mdi-account</v-icon>
                      {{ user.first_name }} {{ user.last_name }}
                    </span>
                    <br />
                    {{ user.username }}
                </v-card-text>
                <v-card-text v-if="!isAuth">

                </v-card-text>
            </v-card>
            <v-skeleton-loader type="paragraph">
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
              <v-icon v-if="!item.parent_id" left color="accent">
                {{ open ? 'fa-folder-open' : 'fa-folder' }}
              </v-icon>
              <v-icon v-else left color="accent">
                {{ item.icon }}
              </v-icon>
              {{ item.display_name }}
            </span>
                    </template>
                </v-treeview>
            </v-skeleton-loader>
            <div class="ma-3">
                <v-btn block color="secondary" @click="confirmLogout">
                    <v-icon small left>fa-power-off</v-icon>
                    Logout
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
                isLoading: false
            };
        },
        computed: mapGetters('auth', ['navigationItems', 'user', 'isAuth']),
        created() {
            this.open.push(this.navigationItems[0]); //Shop immer öffnen
        },
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
                        'Möchten Sie sich wirklich Ausloggen',
                        'secondary'
                    )
                    .then(confirm => confirm && this.logout());
            }
        }
    };
</script>
<style scoped></style>
