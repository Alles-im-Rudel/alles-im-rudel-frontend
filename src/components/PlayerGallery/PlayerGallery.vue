<template>
  <v-row class="player-gallery">
    <v-col
      v-for="(entry, index) in entries"
      :key="index"
      cols="12"
      md="6"
      lg="3"
    >
      <div class="player-gallery__entry">
        <div class="player-gallery__image">
          <img
            :src="entry.image"
            alt=""
          >
        </div>

        <div class="player-gallery__overlay">
          <div
            class="player-gallery__contents text-center"
            :class="{'player-gallery__contents--no-name': !entry.lastName}"
          >
            <h3
              v-if="entry.firstName"
              class="text-h6 pb-0"
            >
              {{ entry.firstName }}
            </h3>
            <h3 class="text-h4 white--text player-gallery__tag">
              "{{ entry.tag }}"
            </h3>
            <h3
              v-if="entry.lastName"
              class="text-h6"
            >
              {{ entry.lastName }}
            </h3>

            <div class="player-gallery__button">
              <a
                :href="entry.link"
                target="_blank"
              >
                <v-btn
                  icon
                  color="white"
                >
                  <v-icon small>
                    fa-link
                  </v-icon>
                </v-btn>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="player-gallery__badges mt-2">
        <PlayerBadge
          v-for="(badge, badgeIndex) in entry.badges"
          :key="badgeIndex"
          :badge="badge"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import PlayerBadge from '@/components/PlayerGallery/PlayerBadge';

export default {
  components: {PlayerBadge},
  props: {
    entries: {
      type: Array,
      required: true,
      default: () => []
    }
  }
};
</script>

<style lang="scss">
.player-gallery {
  &__entry {
    position: relative;
  }

  &__image {
    overflow: hidden;
    display: flex;

    img {
      width: 100%;
    }
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
  }

  &__contents {
    color: #ddd;
    padding: 16px;
    background-image: radial-gradient(#0009 5%, #0000 70%);
    margin-bottom: -48px;
    transition: 0.2s ease-in-out;
  }

  &__contents--no-name &__tag {
    margin-bottom: 40px;
  }

  &__overlay:hover &__contents {
    margin-bottom: 0;
  }

  &__button {
    margin-top: 8px;
  }

  &__badges {
    display: flex;
    justify-content: center;
  }
}
</style>