<template>
  <v-container>
    <BaseCard v-if="user.id && !isLoading">
      <v-card-title>
        {{ user.fullName }}
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            lg="2"
            md="2"
          >
            <v-img
              v-if="user.image"
              class="black--text align-end"
              :src="user.image.image"
            />
          </v-col>
          <v-col
            cols="12"
            lg="4"
            md="6"
          >
            <v-list-item>
              <v-list-item-content class="text-left">
                <v-list-item-title class="text-h5">
                  {{ user.fullName }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-h6">
                  Benutzername: {{ user.username }}
                </v-list-item-subtitle>
                <v-list-item-subtitle class="text-h6">
                  Aktiv:
                  <v-icon :color="activeColor">
                    {{ user.isActive | boolIcon }}
                  </v-icon>
                </v-list-item-subtitle>
                <v-list-item-subtitle class="text-h6">
                  Geburtsdatum: {{ user.birthday | date }}
                </v-list-item-subtitle>
                <v-list-item-subtitle class="text-h6">
                  Benutzergruppen:
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-chip
                    v-for="userGroup in user.userGroups"
                    :key="userGroup.id"
                    class="ma-1"
                    dark
                    :color="userGroup.color"
                  >
                    {{ userGroup.displayName }}
                  </v-chip>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col
            cols="12"
            lg="4"
            md="4"
          >
            <v-list-item>
              <v-list-item-content class="text-left">
                <v-list-item-title class="text-h5">
                  Aktivitäten
                </v-list-item-title>
                <v-list-item-subtitle class="text-h6">
                  Likes vergeben: {{ user.likedCount }}
                </v-list-item-subtitle>
                <v-list-item-subtitle class="text-h6">
                  Kommentare: {{ user.commentsCount }}
                </v-list-item-subtitle>
                <v-list-item-subtitle class="text-h6">
                  Posts: {{ user.postsCount }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-card-text>
    </BaseCard>
    <BaseCard v-else>
      <v-card-text>
        <v-skeleton-loader
          class="mx-auto"
          type="card"
        />
      </v-card-text>
    </BaseCard>
    <summoner-card
      v-if="user.id && !isLoading && user.mainSummoner"
      class="mt-1"
      :summoner="user.mainSummoner"
    />
  </v-container>
</template>

<script>

import SummonerCard from '@/components/summoners/SummonerCard';

export default {
  name: 'ShowProfile',
  components: {
    SummonerCard
  },
  props: {
    username: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      user: {
        id: null
      },
      isLoading: false
    };
  },
  computed: {
    activeColor() {
      return this.user.isActive ? 'success' : '';
    }
  },
  watch: {
    username: {
      handler() {
        this.getUser();
      }
    }
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.isLoading = true;
      const params = {
        username: this.username
      };
      window.axios
          .get('profils', {params})
          .then((response) => {
            this.user = response.data.data;
          })
          .finally(() => (this.isLoading = false));
    },
  }
};
</script>
