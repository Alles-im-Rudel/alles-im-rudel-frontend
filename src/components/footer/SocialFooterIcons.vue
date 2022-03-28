<template>
  <div class="social-footer d-flex justify-center">
    <a
      v-for="(icon, index) in icons"
      :key="index"
      :href="icon.link"
      target="_blank"
      class="social-footer-link mx-2"
    >
      <v-btn
        dark
        icon
        large
      >
        <v-icon size="24px">
          {{ icon.icon }}
        </v-icon>
      </v-btn>
    </a>
  </div>
</template>

<script>
import links from '@/constants/links';

export default {
  data() {
    return {
      icons: [
        {
          icon: 'fab fa-discord',
          link: links.DISCORD
        },
        {
          icon: 'fab fa-instagram',
          link: links.INSTAGRAM
        },
        {
          icon: 'fab fa-facebook',
          link: links.FACEBOOK
        },
        {
          icon: 'fab fa-youtube',
          link: links.YOUTUBE
        },
        {
          icon: 'fab fa-twitch',
          link: links.TWITCH
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.social-footer {
  .social-footer-link {
    text-decoration: none;
  }
}
</style>