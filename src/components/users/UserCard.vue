<template>
  <v-hover v-slot="{ hover }">
    <v-card
      height="100%"
      tile
    >
      <v-img
        class="align-end"
        max-height="400"
        :src="user.image"
      >
        <v-expand-transition>
          <v-card
            v-if="hover"
            tile
            class="transition-in-out"
            color="greyBlue"
            style="color: white;"
          >
            <v-card-title class="justify-center pb-2">
              <h4
                class="text-h4"
                style="overflow-wrap: normal; word-break: normal;"
              >
                {{ user.fullName }}
              </h4>
            </v-card-title>
            <v-card-text>
              <h5 class="text-h6 secondary--text text-pre-line">
                {{ user.text }}
              </h5>
            </v-card-text>
            <v-divider />
            <v-card-actions
              v-if="user.socials"
              class="justify-center"
            >
              <v-btn
                v-if="user.socials.instagram"
                dark
                icon
                @click="instagram"
              >
                <v-icon>fab fa-instagram</v-icon>
              </v-btn>
              <v-btn
                v-if="user.socials.snapchat"
                dark
                icon
                @click="snapchat"
              >
                <v-icon>fab fa-snapchat</v-icon>
              </v-btn>
              <v-btn
                v-if="user.socials.linkedin"
                dark
                icon
                @click="linkedin"
              >
                <v-icon>fab fa-linkedin</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</template>
<script>

export default {
  components: {},
  props: {
    user: {
      required: true,
      type: Object,
      default: () => ({
        fullName: null,
        text: null,
        image: null,
        socials: {
          instagram: null,
          snapchat: null,
          linkedin: null
        }
      })
    }
  },
  methods: {
    linkedin() {
      window.open('https://www.linkedin.com/in/' + this.user.socials.linkedin + '/', '_blank');
    },
    snapchat() {
      window.open('https://www.snapchat.com/add/' + this.user.socials.snapchat, '_blank');
    },
    instagram() {
      window.open('https://www.instagram.com/' + this.user.socials.instagram + '/', '_blank');
    },
  }
};
</script>