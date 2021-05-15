<template>
  <v-hover v-slot="{ hover }">
  <v-card height="100%" tile>
    <v-img
        class="align-end"
        max-height="400"
        :src="user.img"
    >
      <v-expand-transition>
        <v-card
            tile
            v-if="hover"
            class="transition-in-out"
            color="greyBlue"
            style="color: white"
        >
          <v-card-title class="justify-center">
            <h4 class="text-h4">{{ user.fullName }}</h4>
          </v-card-title>
          <v-card-text style="color: white">
            <h5 class="text-h5">{{ user.text }}</h5>
          </v-card-text>
          <v-divider />
          <v-card-actions class="justify-center">
            <v-btn
                dark
                icon
                @click="instagram"
            >
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn
                dark
                icon
                @click="instagram"
            >
              <v-icon>mdi-snapchat</v-icon>
            </v-btn>
            <v-btn
                dark
                icon
                @click="instagram"
            >
              <v-icon>mdi-xing</v-icon>
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
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {
  },
  methods: {
    instagram() {
      window.open("https://www.instagram.com/allesimrudel/?hl=de", "_blank");
    },
  }
};
</script>