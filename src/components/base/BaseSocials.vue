<template>
  <div>
    <v-btn
      v-if="instagram"
      :href="'https://www.instagram.com/' + instagram"
      target="_blank"
      icon
    >
      <v-icon>fab fa-instagram</v-icon>
    </v-btn>
    <v-btn
      v-if="snapchat"
      :href="'https://www.snapchat.com/add/' + snapchat"
      target="_blank"
      icon
    >
      <v-icon>fab fa-snapchat</v-icon>
    </v-btn>
    <v-btn
      v-if="linkedin"
      :href="'https://www.linkedin.com/in/' + linkedin"
      target="_blank"
      icon
    >
      <v-icon>fab fa-linkedin</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    instagram: {
      type: String,
      required: false,
      default: null
    },
    snapchat: {
      type: String,
      required: false,
      default: null
    },
    linkedin: {
      type: String,
      required: false,
      default: null
    },
  }
};
</script>