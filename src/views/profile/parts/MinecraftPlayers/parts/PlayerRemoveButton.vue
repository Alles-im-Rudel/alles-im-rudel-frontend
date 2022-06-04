<template>
  <v-btn
    :loading="isLoading"
    small
    icon
    color="error"
    @click="submit"
  >
    <v-icon
      small
    >
      fa-times
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    player: {
      type: Object,
      required: true,
      default: () => ({
        id: null
      })
    }
  },
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    submit() {
      this.isLoading = true;
      window.axios.delete('/minecraft/players', {
        params: {
          minecraftPlayerId: this.player.id
        }
      })
        .then(() => {
          this.$emit('reload');
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>