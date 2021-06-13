<template>
  <v-footer
    id="footer"
    dark
    padless
    absolute
    :style="'margin-bottom: -'+footerHeight+'px'"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="greyBlue py-8">
        <div
          class="d-block d-md-flex justify-space-between align-center mx-auto px-4"
          style="max-width: 1300px; width: 100%"
        >
          <div
            class="text-h6 ma-0"
            style="overflow-wrap: normal; word-break: normal;"
          >
            Get connected with us on social networks!
          </div>
          <div class="mt-4 mt-md-0">
            <v-btn
              class="mx-2"
              dark
              icon
              large
              @click="discord"
            >
              <v-icon size="24px">fab fa-discord</v-icon>
            </v-btn>
            <v-btn
              class="mx-2"
              dark
              icon
              large
              @click="instagram"
            >
              <v-icon size="24px">fab fa-instagram</v-icon>
            </v-btn>
            <v-btn
              class="mx-2"
              dark
              icon
              large
              @click="facebook"
            >
              <v-icon size="24px">fab fa-facebook</v-icon>
            </v-btn>
            <v-btn
              class="mx-2"
              dark
              icon
              large
              @click="youtube"
            >
              <v-icon size="24px">fab fa-youtube</v-icon>
            </v-btn>
            <v-btn
              class="mx-2"
              dark
              icon
              large
              @click="twitch"
            >
              <v-icon size="24px">fab fa-twitch</v-icon>
            </v-btn>
          </div>
        </div>
      </v-card-title>

      <v-card-text class="pt-8 primary white--text text-center">
          <v-icon size="128">$vuetify.icons.allesimrudel</v-icon>
          <div style="margin-top: -18px">
            {{ new Date().getFullYear() }} — <strong>Alles Im Rudel</strong>
          </div>
      </v-card-text>
      <v-card-text class="pb-14 primary white--text">
        <div :class="isMobile ? 'd-block text-center' : 'd-flex justify-center'">
          <v-btn
            @click="pushRouteTo('impressum')"
            class="mx-1"
            text
            small
          >
            Impressum
          </v-btn>
          <v-btn
            @click="pushRouteTo('dataProtection')"
            class="mx-1"
            text
            small
          >
            Datenschutzerklärung
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
import {debounce} from 'lodash';
import CheckMobile from "@/mixins/CheckMobile";

export default {
  data() {
    return {
      footer: null,
      footerHeight: 150
    }
  },
  mixins: [CheckMobile],
  created() {
    this.getFooter();
    window.addEventListener("resize", this.getFooter);
  },
  destroyed() {
    window.removeEventListener("resize", this.getFooter);
  },
  methods: {
    getFooter: debounce(function () {
      this.footer = document.getElementById('footer');
      this.footerHeight = this.footer.clientHeight;
    }, 200),
    youtube() {
      window.open("https://www.youtube.com/channel/UCPNIzEtVBgS5cu6ak_FkjDQ", "_blank");
    },
    instagram() {
      window.open("https://www.instagram.com/allesimrudel/?hl=de", "_blank");
    },
    discord() {
      window.open("https://www.discord.com/invite/sMzHHnFkTh/", "_blank");
    },
    facebook() {
      window.open("https://www.facebook.com/allesimrudel/", "_blank");
    },
    twitch() {
      window.open("https://www.twitch.tv/allesimrudel/", "_blank");
    }
  },
}
</script>