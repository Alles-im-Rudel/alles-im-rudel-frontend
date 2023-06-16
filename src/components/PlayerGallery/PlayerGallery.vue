<template>
  <v-row class="player-gallery justify-center">
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
            :src="entry.image || '/assets/branches/airsoft/members/default.jpg'"
            alt=""
          >
        </div>

        <div class="player-gallery__header">
          <div class="player-gallery__badges">
            <PlayerBadge
              v-for="(badge, badgeIndex) in entry.badges"
              :key="badgeIndex"
              :badge="badge"
              class="player-gallery__badge"
            />
          </div>

          <div class="player-gallery__join-year white--text text-center">
            {{ entry.joinYear }}
          </div>
        </div>

        <div class="player-gallery__overlay">
          <div class="player-gallery__contents text-center">
            <h3
              v-if="entry.tag"
              class="text-h4 white--text player-gallery__tag"
            >
              "{{ entry.tag }}"
            </h3>

            <h3
              v-if="entry.firstName"
              class="text-h6 pb-0 player-gallery__first-name"
            >
              {{ entry.firstName }}
            </h3>

            <h3
              v-if="entry.title"
              class="player-gallery__title"
            >
              {{ entry.title }}
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
    overflow: hidden;
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
  }

  &__contents {
    color: #ddd;
    padding: 16px;
    background-image: radial-gradient(#0007 5%, #0000 70%);
    margin-bottom: -48px;
    transition: 0.2s ease-in-out;
  }

  &__title {
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.0125em;
    font-family: "Roboto", sans-serif;
  }

  &__button {
    margin-top: 8px;
  }

  &__header {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 16px;
    margin-top: -64px;
    transition: 0.2s ease-in-out;
    background-image: radial-gradient(#0002 5%, #0000 70%);
  }

  &__badges {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__badge {
    margin: 0 3px;
  }

  &__join-year {
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.0125em;
    font-family: "Roboto", sans-serif;
    margin-top: 6px;
  }

  &__entry:hover &__contents {
    margin-bottom: 0;
  }

  &__entry:hover &__header {
    margin-top: 0;
  }
}
</style>