<template>
  <div class="player-badge">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <div
          class="player-badge__image"
          v-bind="attrs"
          v-on="on"
        >
          <img
            :src="badge.image"
            alt=""
          >
        </div>
      </template>
      <span>{{ badge.name }}</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  props: {
    badge: {
      type: Object,
      required: true,
      default: () => ({
        image: null,
        name: null
      })
    }
  }
};
</script>

<style lang="scss">
.player-badge {
  &__image {
    display: flex;
    user-select: none;
    width: 22px;

    img {
      width: 100%;
    }
  }
}
</style>