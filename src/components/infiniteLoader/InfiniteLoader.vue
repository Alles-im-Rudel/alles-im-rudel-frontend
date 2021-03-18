<template>
  <v-btn v-if="isLoading" icon>
    <v-icon>fa-circle-notch fa-spin</v-icon>
  </v-btn>
  <v-alert
      style="background-color: rgba(255, 255, 255, 0.6)"
      v-else-if="end"
      border="top"
      colored-border
      color="darkGrey"
      elevation="2"
  >
    {{ loadedText }}
  </v-alert>
</template>

<script>

export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true
    },
    end: {
      type: Boolean,
      required: true
    },
    loadedText: {
      type: String,
      default: () => 'Alles Geladen...'
    }
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        if (Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight >= document.documentElement.offsetHeight) {
          this.$emit('load');
        }
      }
    }
  }
}
</script>