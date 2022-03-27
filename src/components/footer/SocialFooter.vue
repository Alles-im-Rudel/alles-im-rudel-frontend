<template>
  <v-footer
    id="footer"
    dark
    padless
    absolute
    :style="'margin-bottom: -'+footerHeight+'px'"
  >
    <BaseCard
      class="flex"
      flat
    >
      <div class="greyBlue py-8">
        <BaseContainer class="d-block d-md-flex align-center">
          <div class="text-h6 text-center">
            Get connected with us on social networks!
          </div>
          <v-spacer />
          <SocialFooterIcons class="mt-5 mt-md-0" />
        </BaseContainer>
      </div>

      <div class="primary pt-12 pb-14 text-center">
        <div class="footer-logo-container">
          <img
            src="/assets/logos/logo-white-slim.png"
            alt=""
          >
        </div>

        <div class="text-body-2 mt-2">
          {{ new Date().getFullYear() }} — <strong>Alles im Rudel</strong>
        </div>

        <div class="d-block text-center d-md-flex justify-md-center mt-8">
          <v-btn
            class="mx-1"
            text
            small
            @click="pushRouteTo('legal')"
          >
            Impressum
          </v-btn>
          <v-btn
            class="mx-1"
            text
            small
            @click="pushRouteTo('privacy')"
          >
            Datenschutzerklärung
          </v-btn>
        </div>
      </div>
    </BaseCard>
  </v-footer>
</template>

<script>
import SocialFooterIcons from '@/components/footer/SocialFooterIcons';
import {debounce} from 'lodash';

export default {
  components: {SocialFooterIcons},
  data() {
    return {
      footerHeight: 375
    };
  },
  mounted() {
    // noinspection JSValidateTypes
    this.getFooter();
    // noinspection JSCheckFunctionSignatures
    window.addEventListener('resize', this.getFooter);
  },
  destroyed() {
    // noinspection JSCheckFunctionSignatures
    window.removeEventListener('resize', this.getFooter);
  },
  methods: {
    getFooter: debounce(function () {
      this.footer = document.getElementById('footer');
      this.footerHeight = this.footer.clientHeight;
    }, 200)
  },
};
</script>

<style lang="scss">
#footer {
  .footer-logo-container {
    width: 120px;
    margin: 0 auto;

    img {
      width: 100%;
    }
  }
}
</style>