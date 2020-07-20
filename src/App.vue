<template>
    <v-app>
        <navigation />
        <v-content>
            <v-slide-y-transition mode="out-in">
                <router-view />
            </v-slide-y-transition>
        </v-content>
        <!-- GLOBAL COMPONENTS -->
        <confirm-modal ref="confirm" />
        <alert-modal ref="alert" />
        <snackbar-component ref="snackbar" />
        <social-footer />
    </v-app>
</template>
<script>
    import ConfirmModal from './components/dialogs/ConfirmModal';
    import AlertModal from './components/dialogs/AlertModal';
    import Snackbar from './components/dialogs/Snackbar';
    import Navigation from "./components/navigation/Navigation";
    import SocialFooter from './components/footer/SocialFooter'

    export default {
        name: 'App',
        components: {
            'alert-modal': AlertModal,
            'confirm-modal': ConfirmModal,
            'snackbar-component': Snackbar,
            'navigation': Navigation,
            'social-footer': SocialFooter
        },
        data() {
            return {
                refreshing: false,
                serviceWorker: null,
                updateExists: false
            };
        },
        mounted() {
            this.$root.$confirm = this.$refs.confirm;
            this.$root.$alert = this.$refs.alert;
            this.$root.$snackbar = this.$refs.snackbar;
        }
    };
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
