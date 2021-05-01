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
      <v-card-title class="greyBlue">
        <strong class="subheading">Get connected with us on social networks!</strong>
        <v-spacer/>
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
      <v-card-text class="py-2 primary white--text">
        <div :class="isMobile ? 'd-block text-center' : 'd-flex justify-center'">
          <v-btn
            @click="impressum"
            class="mx-1"
            text
            small
          >
            Impressum
          </v-btn>
          <v-btn
            @click="dataProtection"
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
      window.open("https://discord.com/invite/CwjhPq6", "_blank");
    },
    impressum() {
      this.$router.push({name: 'impressum'})
    },
    dataProtection() {
      this.$router.push({name: 'dataProtection'})
    }
  },
}
</script>