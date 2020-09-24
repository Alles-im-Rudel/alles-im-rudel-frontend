<template>
  <div>
    <navigation-bar @toggle-menu="toggleMenu" />
    <navigation-drawer v-model="showMenu" @toggle-menu="toggleMenu" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import NavigationBar from '@/components/navigation/NavigationBar';
import NavigationDrawer from '@/components/navigation/NavigationDrawer';

export default {
  components: {
    'navigation-bar': NavigationBar,
    'navigation-drawer': NavigationDrawer
  },
  computed: {
    ...mapGetters('auth', ['user', 'isAuth'])
  },
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    ...mapActions('auth', ['logout']),
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<!--<template>
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
                    <v-col align-self="center" class="text-left white&#45;&#45;text">
                        <router-link class="text-left white&#45;&#45;text no-underline" :to="{ name: 'home'}">Alles Im Rudel</router-link>
                        <router-link class="text-left white&#45;&#45;text no-underline pl-10" :to="{ name: 'airsoft'}"><v-icon class="white&#45;&#45;text">fa-tree</v-icon> Airsoft</router-link>
                        <router-link class="text-left white&#45;&#45;text no-underline pl-5" :to="{ name: 'gaming'}"><v-icon class="white&#45;&#45;text">fa-desktop</v-icon> Gaming</router-link>
                    </v-col>
                    &lt;!&ndash;<v-col align-self="center" class="text-center">
                        <router-link to="/">
                            <img
                                    class="header-logo"
                                    src="@/assets/logo_light.png"
                                    alt="company-image"
                            />
                        </router-link>
                    </v-col>&ndash;&gt;
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
    import {mapGetters} from 'vuex';
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
        },
    };
</script>
<style scoped>
    .header-logo {
        height: 75px;
    }
    .no-underline {
        text-decoration: none;
    }
</style>-->
