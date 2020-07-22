<template>
    <v-footer
            dark
            padless
    >
        <v-card
                class="flex"
                flat
                tile
        >
            <v-card-title class="greyBlue">
                <strong class="subheading">Get connected with us on social networks!</strong>
                <v-spacer></v-spacer>
                <v-btn
                        class="mx-4"
                        dark
                        icon
                        @click="discord"
                >
                    <v-icon size="24px">mdi-discord</v-icon>
                </v-btn>
                <v-btn
                        class="mx-4"
                        dark
                        icon
                        @click="instagram"
                >
                    <v-icon size="24px">mdi-instagram</v-icon>
                </v-btn>
                <v-btn
                        class="mx-4"
                        dark
                        icon
                        @click="youtube"
                >
                    <v-icon size="24px">mdi-youtube</v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text class="py-2 primary white--text text-center">
                {{ new Date().getFullYear() }} — <strong>Alles Im Rudel</strong>
            </v-card-text>
            <v-card-text class="py-2 primary white--text text-center">
                <v-btn text small @click="impressum">Impressum</v-btn>
            </v-card-text>
        </v-card>
    </v-footer>
</template>
<script>
    export default {
        data() {
            return {}
        },

        methods: {
            youtube() {
                window.open("https://www.youtube.com/channel/UCPNIzEtVBgS5cu6ak_FkjDQ", "_blank");
            },
            instagram() {
                window.open("https://www.instagram.com/allesimrudel/?hl=de", "_blank");
            },
            discord() {
                window.open("https://discord.com/invite/CwjhPq6", "_blank");
            },
            impressum() {
                this.$router.push({name: 'impressum'})
            }
        }
    }
</script>