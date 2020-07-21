<template>
    <v-app>
        <span class="bg" />
        <navigation @user-navigation-changed="setUserNavigation" @side-navigation-changed="setSideNavigation" />
        <v-content class="mt-12">
            <v-slide-y-transition mode="out-in">
                <router-view />
            </v-slide-y-transition>
            <user-navigation :user-navigation="userNavigation" />
            <side-navigation :side-navigation="sideNavigation" />
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
    import SocialFooter from './components/footer/SocialFooter';
    import UserNavigation from "./components/navigation/UserNavigation";
    import SideNavigation from "./components/navigation/SideNavigation";

    export default {
        name: 'App',
        components: {
            'alert-modal': AlertModal,
            'confirm-modal': ConfirmModal,
            'snackbar-component': Snackbar,
            'navigation': Navigation,
            'user-navigation': UserNavigation,
            'side-navigation': SideNavigation,
            'social-footer': SocialFooter
        },
        data() {
            return {
                userNavigation: false,
                sideNavigation: false
            };
        },
        mounted() {
            this.$root.$confirm = this.$refs.confirm;
            this.$root.$alert = this.$refs.alert;
            this.$root.$snackbar = this.$refs.snackbar;
        },
        methods: {
            setUserNavigation() {
                this.userNavigation = !this.userNavigation;
            },
            setSideNavigation() {
                this.sideNavigation = !this.sideNavigation;
            }
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

    .bg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: url('./assets/background.jpeg') no-repeat center center;
        background-size: cover;
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
